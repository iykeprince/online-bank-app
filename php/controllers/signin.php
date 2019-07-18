<?php
require_once "helpers/utility.php";
class signin extends controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function authenticate()
    {
        $d = json_decode(file_get_contents("php://input"));
        
        $data['email'] = $this->escape_value($d->email);
        $data['password'] = $this->escape_value($d->password);
        // print_r($data);
        $res = $this->model->authenticate($data);
        echo Utility::convertToJSON($res);
    }

}
