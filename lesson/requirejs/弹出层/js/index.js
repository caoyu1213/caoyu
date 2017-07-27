/**
 * Created by ASUS on 2017/7/27.
 */
requirejs.config({
        paths:{
            jquery:'jquery-1.11.2'
        }
    });
require(["jquery","dialog"],function($,Dialog){
    $("#btn").on("click",function(){
        var setting={
            content:"login.html"
        };
        var dialog = new Dialog(setting);
        dialog.open();
    });
});