#!/usr/bin/perl
use strict;
use warnings;

use EPictGet;

my $pct = EPictGet->new;

while (1) {
    $pct->run();
    sleep(10 * 60);
}

