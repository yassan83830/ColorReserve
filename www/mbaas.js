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


function dataSave(){

    // 保存先クラスの作成
    var ColorManageClass = ncmb.DataStore("ColorManageClass");
       
    // 保存先クラスのインスタンスを生成
    var colorManageClass = new ColorManageClass();


    // 値を設定と保存
    colorManageClass.set("message", "Hello, NCMB!")
                    .set("colorVal",123)
                    .save()
                    .then(function(object){
                        
                    // 保存に成功した場合の処理
                        colorManageClass.setIncrement("colorVal", 1);
                        return colorManageClass.update(); // 保存したgameScoreオブジェクトを更新
                    })
                    .catch(function(err){
                    // 保存に失敗した場合の処理
        
                    });
         
}


function bgcolorChange(bgcolorCodeVal){

    // 保存先クラスの作成
    var ColorManageClass = ncmb.DataStore("ColorManageClass");
       
    // 保存先クラスのインスタンスを生成
    var colorManageClass = new ColorManageClass();
    
    // Red,Orange,Yellow,Green,Blue,Indigo,Violet
    var bgcolorCodeAry = ['#FF0000','#FF7F00','#FFFF00','#00FF00','#0000FF','#4B0082','#9400D3'];
    //カラーコード
    var bgcolorCode = bgcolorCodeAry[bgcolorCodeVal];


    // 値を設定と保存
    colorManageClass.set("colorVal",bgcolorCode)
                    .save()
                    .then(function(object){
                        /*changeBoxColor(bgcolorCode);
                        alert(bgcolorCode);*/
                    })
                    .catch(function(err){
                    // 保存に失敗した場合の処理
        
                    });
         
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
                        alert(bgcolorCode);
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    });
}


function dataUpdate(){

  // 保存先クラスの作成
    var ColorManageClass = ncmb.DataStore("ColorManageClass");

    // 保存先クラスのインスタンスを生成
    var colorManageClass = new ColorManageClass();
    
    ColorManageClass.equalTo('colorVal', 124)
                    .fetch()
                    .then(function(results){
                                    
                        results.setIncrement("colorVal", 1);
                        return results.update(); // 保存したgameScoreオブジェクトを更新
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    });
     
        
}