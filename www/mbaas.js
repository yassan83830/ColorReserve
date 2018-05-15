// mbaasのAPIキーの文字列
var mbaas_api_key = "ab274364afb14455bd9ecb2767898b2a00946e0105edd00b99159b9073962a79";
// mbaasのクライアントキーの文字列
var mbaas_cli_key = "9b770fb76884830ed41bc8c6139ff285bd80a4dd2cdce9d862f5f4698967b7c1";

// APIキーの設定とSDK初期化
var ncmb = new NCMB(mbaas_api_key,mbaas_cli_key);

    // 保存先クラスの作成
    //var ColorManageClass = ncmb.DataStore("ColorManageClass");

    // 保存先クラスのインスタンスを生成
    //var colorManageClass = new ColorManageClass();
    
window.onload = function(){
    //dataFetch();
    var intervalID = setInterval("dataFetch()", 3000);
}



function dataFetch(){
        
    // 保存先クラスの作成
    var ColorManageClass = ncmb.DataStore("ColorManageClass");
    
    target = document.getElementById("output");
    
    var bgcolorCode;
    
    ColorManageClass.fetchAll()
                    .then(function(results){
                        for(var i = 0; i < results.length; i++){
                            var object = results[i];
                            
                        }
                        target.innerHTML = bgcolorCode = object.get("colorVal");
                        changeBoxColor(bgcolorCode);
                        //alert(bgcolorCode);
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    });
}
