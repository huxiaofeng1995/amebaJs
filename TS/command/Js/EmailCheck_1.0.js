function metadata() {
  return {
    name: "EmailCheck",
    description: "验证Email的有效性。包含1个入参和2个出口，如果输入的Email格式是正确的，走success出口，否则走fail出口。例如，检验test@163.com格式是否正确，应该走success出口。",
    version: "1.0",
    inArgs: [
    "inEmail",
    ],
    outArgs: []
  };
}

function execute(inArgs, resultCallback) {

  var email=inArgs.inEmail;
  if(email==null)
    throw new ArgumentNullException("inEmail");

  var end;

  try{
    var reg="^\\w+([-_.]*\\w*)*@\\w+([-.]\\w+)*.\\w+([-.]\\w+)*$";
    var result=email.match(reg);   
    end=result==null?"fail":"success";
  }catch(err){
    throw new RuntimeException(err);
  }

  resultCallback({
    end: end,
    outArgs: {}
  });
} 

}

module.exports.metadata=metadata;
module.exports.execute=execute;

