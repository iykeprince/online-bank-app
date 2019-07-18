<?php
class Utility{

      public static function convertToJSON($results){
            return json_encode($results);
      }

      public static function getServerAuthorizationToken($header){
            if (substr($header, 0, 7) !== 'Bearer ') {
                  return false;
              }
              
              return trim(substr($header, 7));
      }

      public static function getPayLoad(){
            $authorization = $_SERVER['HTTP_AUTHORIZATION'];
            $jwtAuthToken = Utility::getServerAuthorizationToken($authorization);
            return JWT::decode($jwtAuthToken, APP_JWT_SECRET);;
      }

      function getToken($length){
            $token = "";
            $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            $codeAlphabet.= "abcdefghijklmnopqrstuvwxyz";
            $codeAlphabet.= "0123456789";
            $max = strlen($codeAlphabet); // edited
       
           for ($i=0; $i < $length; $i++) {
               $token .= $codeAlphabet[random_int(0, $max-1)];
           }
       
           return $token;
       }
}