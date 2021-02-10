const db=firebase.firestore();
var emaillist=[];
$( document ).ready(function() {
    ifpresent();
});
async function  addparticipant(){
    var name=$('#name').val();
    var email=$('#mail').val();
    var college=$('#college').val();
    var department=$('#department').val();
    var phone=$('#phone').val();
    var gender=$('#actorsex').val();
    var year=$('#year').val();
    var dupe=emaillist.includes(email);
    if((name.length>3)&&(email.length>3)&&(college.length>1)&&(phone.length==10)&&(!dupe))
   { db.collection('users').add({
        Name: name,
        Email: email,
        College: college,
        Department: department,
        Phone:phone,
        Gender:gender,
        Year:year
    }).then(()=>{
        window.confirm("Regitration Succesfull");
        ifpresent();
    });
    }
    else
    window.alert("Please Enter Proper Information Or you have already registered");
}

function ifpresent()
{
    db.collection('users').get().then((snapshot)=>{
        snapshot.docs.forEach(doc => {
            let obj=doc.data()
            emaillist.push(obj.Email)
        });
    })
}

function checkitout(){
    var checkmail=$('#checkmail').val();
    var str;
    if(emaillist.includes(checkmail))
    {
        str= `<h4>YAAY!!!! You Have Registered Succesfully!! See You on 10th February!!</h4>
        <h4> Registration Email Id: asimnath00@gmail.com</h4>`;
    }
    else
    {
        str=`<h4>Please register</h4>`
    }
    document.getElementById('checkitoutboys').innerHTML=str;
}