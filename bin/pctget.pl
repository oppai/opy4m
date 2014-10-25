#!/usr/bin/perl
use strict;
use warnings;

use LWP::Simple;
use LWP::UserAgent;

use HTML::TreeBuilder;
use File::Basename;
use Data::Dumper;

use constant BASE_URL => 'http://jun.2chan.net/b/';
use constant CATE_URL => 'http://jun.2chan.net/b/futaba.php?mode=cat';
use constant USER_AGENT => 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)';

my $ua = LWP::UserAgent->new('agent' => USER_AGENT);

while (1) {
    my $content = $ua->get(CATE_URL)->content;
    my @item = get_catalog($content);

    for (@item) {
        my $url = $_->{url};
        my $d = basename($url);
        $d =~ s/^(.*)\..*$/$1/;

        mkdir "./file/$d" if (!-d "./file/$d");
        get_html( $url, $d);
    }
    undef @item;
    sleep(10 * 60);
}

sub get_html {
    my ($url,$folder) = @_;
    my $tree = HTML::TreeBuilder->new;
    $tree->parse( $ua->get($url)->content );

    for ( $tree->find('a') ) {
        my $target = $_->attr('href');
        if( $target =~ /\.2chan\.net\/.*\.(jpg|png|gif)$/ ){
            my $file_path = $folder.'/'.basename($target);
            if (!-f "./file/$file_path") {
                warn Dumper $target;
                save_img($target, $file_path );
            }
        }
    }
    undef $tree;
    # return $content;
}

sub save_img {
    my ($url,$file) = @_;
    getstore( $url , "./file/$file" );
}

sub get_catalog {
    my $content = shift;
    my $tree = HTML::TreeBuilder->new;
    $tree->parse($content);

    my @result = ();
    foreach my $item ( $tree->find("a") ) {
        foreach my $img ( $item->find('img') ) {
            push(@result, {
                url => BASE_URL.$item->attr('href'),
                thumbnail => $img->attr('src'),
            });
        }
    }

    undef $tree;

    return @result;
}
