$(document).ready(function(){
    $("#bt2").click(function(){
        $("#myModal").modal();
    });
    $("#bt1").click(function(){
        $("#myModaldangnhap").modal();
    });
    $("#btndathangtc").click(function(){
        alert("Đặt thành công")
    });
    //Kiểm tra đăng kí
    function kiemTraTen(){
        let mauKT=/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val()==""){
            $("#tbName").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu viết hoa không viết số");
            return false;
        }
        $("#tbName").html("*");
            return true;
    }
    $("#Name").blur(kiemTraTen);



    function KTMail() {
        var mail = /[[A-Za-z0-9]+(@gmail.com)$/;
        if ($("#Em").val() == "") {
            $("#tbEm").html("*Bắt buộc nhập");
            return false;
        }
        if (!mail.test($("#Em").val())) {
            $("#tbEm").html("Ví dụ tuananh@gmail.com");
            return false;
        }
        $("#tbEm").html("*");
        return true;
    }
    $("#Em").blur(KTMail);


    function kiemTraDiaChi(){
        let mauKT=/^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#DC").val()==""){
            $("#tbDc").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#DC").val())){
            $("#tbDc").html("Nhập sai");
            return false;
        }
        $("#tbDc").html("*");
            return true;
    }
    $("#DC").blur(kiemTraDiaChi);

    function kiemTraNS(){
        if($("#NS").val()==""){
            $("#tbNS").html("*Bắt buộc nhập");
            return false;
        }
        var today=new Date;
        var ntt=new Date($("#NS").val());
        if(ntt>today){
            $("#tbNS").html("Nhập sau năm hiện tại");
            return false; 
        }
        $("#tbNS").html("*");
            return true;
    }
  
    $("#NS").blur(kiemTraNS);

    function kiemTraSDT(){
        let mauKT=/^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo định dạng 0xxx-xxx-xxx trong đó x là số");
            return false;
        }
        $("#tbSDT").html("*");
            return true;
    }
    $("#SDT").blur(kiemTraSDT);

    function kiemTraMK(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#MK").val()==""){
            $("#tbMK").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#MK").val())){
            $("#tbMK").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbMK").html("*");
            return true;
    }
    $("#MK").blur(kiemTraMK);

    function kiemTraTK(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#TK").val()==""){
            $("#tbTK").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#TK").val())){
            $("#tbTK").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbTK").html("*");
            return true;
    }
    $("#TK").blur(kiemTraTK);


    function kiemTraNLMK(){
        
        if($("#NLMK").val()==""){
            $("#tbNLMK").html("*Bắt buộc nhập");
            return false;
        }
        if($("#NLMK").val()!=$("#MK").val()){
            
            $("#tbNLMK").html("Nhập sai");
            return false;
        }
        $("#tbNLMK").html("*");
            return true;
    }
    $("#NLMK").blur(kiemTraNLMK);
    
    var i=1;
    $("#Save").click(function(){
        if(kiemTraMK()==true && kiemTraDiaChi()==true && kiemTraNS()==true && kiemTraNLMK()==true && kiemTraSDT()==true &&  kiemTraTK()==true && KTMail()==true &&kiemTraTen()==true){

       
            row ="<tr>";
            row +="<th>"+(i++)+"</th>";
            row +="<th>"+$("#Name").val()+"</th>";
            row +="<th>"+$("#Em").val()+"</th>";
            row +="<th>"+$("#NS").val()+"</th>";
            row +="<th>"+$("#GT").val()+"</th>";
            row +="<th>"+$("#DC").val()+"</th>";
            row +="<th>"+$("#SDT").val()+"</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        
        }
    })
    //kiểm tra đăng nhập
    function kiemTraTKDN(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#TKDN").val()==""){
            $("#tbTKDN").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#TKDN").val())){
            $("#tbTKDN").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbTKDN").html("*");
            return true;
    }
    $("#TKDN").blur(kiemTraTKDN);

    function kiemTraMKDN(){
        let mauKT=/[a-zA-Z0-9]{8,15}/;
        if($("#MKDN").val()==""){
            $("#tbMKDN").html("*Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#MKDN").val())){
            $("#tbMKDN").html("Nhập từ 8 đến 15 không kí tự đặc biệt");
            return false;
        }
        $("#tbMKDN").html("*");
            return true;
    }
    $("#MKDN").blur(kiemTraMKDN);

    $("#dangNhap").click(function(){
        if( kiemTraTKDN()==true &&kiemTraMKDN()==true){
            $("#dangnhapbtn").html("ĐĂNG NHẬP");
        }
    });
   
    //list image
    var imgfeature = document.querySelector('.img-feature')
    var listimg = document.querySelectorAll('.list-image img')
    var prevbtn = document.querySelector('.prev')
    var nextbtn = document.querySelector('.next')

    var currentindex = 0;

    function updateimageindex(index) {
        document.querySelectorAll('.list-image div').forEach(item => {
            item.classList.remove('active')
        })
        currentindex = index
        imgfeature.src = listimg[index].getAttribute('src')
        listimg[index].parentElement.classList.add('active')
    }

    listimg.forEach((imgElement, index) => {
        imgElement.addEventListener('click', e => {
            updateimageindex(index)
        })
    })

    prevbtn.addEventListener('click', e => {
        if (currentindex == 0) {
            currentindex = listimg.length - 1
        } else {
            currentindex--;
        }
        updateimageindex(currentindex)
    })
    nextbtn.addEventListener('click', e => {
        if (currentindex == listimg.length - 1) {
            currentindex = 0
        } else {
            currentindex++;
        }
        updateimageindex(currentindex)
    })
});