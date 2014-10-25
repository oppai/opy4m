package EPictGet;

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


sub new {
    my $self = shift;
    bless{
    }, $self;
    return $self;
}

sub ua {
    return LWP::UserAgent->new('agent' => USER_AGENT);
}

sub content {
    my ($self, $url) = @_;
    return $self->ua->get($url)->content;
}

sub run {
    my $self = shift;
    for ( @{$self->catalog} ) {
        my $url = $_->{url};
        my $d = basename($url);
        $d =~ s/^(.*)\..*$/$1/;

        mkdir "./file/$d" if (!-d "./file/$d");
        $self->fetch_thread($url, $d);
    }
}


sub fetch_thread {
    my ($self,$url,$folder) = @_;

    my $tree = HTML::TreeBuilder->new;
    $tree->parse( $self->content($url) );

    for ( $tree->find('a') ) {
        my $target = $_->attr('href');
        if( $target =~ /\.2chan\.net\/.*\.(jpg|png|gif)$/ ){
            my $file_path = $folder.'/'.basename($target);
            if (!-f "./file/$file_path") {
                warn Dumper $target;
                __save_img($target, $file_path );
            }
        }
    }
}

sub __save_img {
    my ($url,$file) = @_;
    getstore( $url , "./file/$file" );
}

sub catalog {
    my $self = shift;
    my $tree = HTML::TreeBuilder->new;
    $tree->parse($self->content(CATE_URL));

    my $result = [];
    foreach my $item ( $tree->find("a") ) {
        foreach my $img ( $item->find('img') ) {
            push $result, {
                url => BASE_URL.$item->attr('href'),
                thumbnail => $img->attr('src'),
            };
        }
    }

    return $result;
}
1;
