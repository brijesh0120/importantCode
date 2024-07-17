<?php
$user_time = new DateTime("now", new DateTimeZone($timezone));
$timezone_offset= ($user_time->getOffset())/60;
$timediff=-$timezone_offset;
gmdate("Y/m/d H:i:s", strtotime($date."-".$timediff." minutes"));
?>
