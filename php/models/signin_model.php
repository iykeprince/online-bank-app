<?php
require_once "helpers/jwt.php";
class signin_model extends model{
    
    public function __construct(){
        parent::__construct();
    }
    public function authenticate($data){
        $email = $data['email'];
        $password = $data['password'];
       
        $query = "SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'";
        $result = $this->db->getCount($query);
        if($result == 0){
            $response['isLoggedIn'] = false;
        }else {
            $payload = [
                "data" => $result,
                "iss" => "localhost",
                "iat" => time(),
                "exp" => time() + (1800),
            ];
    
            $token = JWT::encode($payload, APP_JWT_SECRET);
            $response['isLoggedIn'] = true;
            $response['token'] = $token;    
        }
        return $response;
    }
}