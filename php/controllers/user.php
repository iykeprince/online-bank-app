<?php
require_once "helpers/utility.php";
class user extends controller{
    public function __construct(){
        parent::__construct();
    }
    public function getProfile(){
        $userId = $_GET['user_id'];
        $profile = $this->model->getProfile($userId);
        echo Utility::convertToJSON($profile);
    }
    
   
    /**
     * 
     * UPDATE PROFILE
     */
    public function updateProfile($email){
        $response = $this->model->updateProfile($email);
        echo $response;
    }
    public function updateProfilePicture($email){
        $response = $this->model->updateProfilePicture($email);
        echo $response;
    }
}