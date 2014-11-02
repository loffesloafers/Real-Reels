<?php
$str = file_get_contents('http://bechdeltest.com/api/v1/getMoviesByTitle?title');
header('Content-Type: application/json');
echo $str

?>