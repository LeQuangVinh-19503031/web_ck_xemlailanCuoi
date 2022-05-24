var ID = document.getElementById('txtID');
var Name = document.getElementById('txtName');
var Email = document.getElementById('txtEmail');
var SDT = document.getElementById('txtSdt');
var Khoa = document.getElementById('txtKhoa');

function ktID(){
    var kt = /^[1-2][0-9]{7}$/;
    if(ID.value == ''){
        document.getElementById('mes-ID').innerText = 'Trong kia';
        return false;
    }
    if(!kt.test(ID.value)){
        document.getElementById('mes-ID').innerText = 'MSSV gom co 8 so';
        return false;
    }else{
        document.getElementById('mes-ID').innerText = '';
        return true;
    }
}
function User(id,name,email,sdt,khoa){
    this.id = id;
    this.name = name;
    this.email = email;
    this.sdt = sdt;
    this.khoa = khoa;

    this.addTable = function(){
        return `<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${sdt}</td><td>${khoa}</td></tr>`;
    }
}
var ds = '';
function addTable_tbody(){
    var add = document.getElementById('dsSv');
    console.log(add)
    var user1 = new User(ID.value,Name.value,Email.value,SDT.value,Khoa.value);
    ds += user1.addTable();
    console.log(user1)
    add.innerHTML = ds;
}
function ktAdd(){
    ktID();
    if(ktID()){
        addTable_tbody()
        document.querySelector('#submit').setAttribute('data-dismiss','modal');
    }
}
