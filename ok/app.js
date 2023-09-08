var icon_menu = document.querySelector('.icon_menu')
var side_bar = document.querySelector('.side_bar')
var btn_size_bar = document.querySelector('.btn_side_bar')
var text_menu = document.querySelectorAll('.text_menu')


var numberCredits = document.querySelector('.number_credits')
var coefficient = document.querySelector('.coefficient')
// Nút thêm môn học
var btnAddCourse = document.getElementById('btnAddCourse')

// sidebar

var calculator = document.querySelector('.calculator')
var main_calculator = document.querySelector('.main_calculator')
var list = document.querySelector('.list')
var main_list = document.querySelector(".main_list")


// Các input tính học phí
var semester = document.getElementById("semester")
var year = document.getElementById("year")
var code_course = document.getElementById("code_course")
var code_course_value = code_course.value
var btn_add_course = document.getElementById("btn_add_course")

var tableList = document.getElementById('table_list')

const danhsachmon = JSON.parse(localStorage.getItem('danhsachmon')) || []
const danhsachkyhoc = JSON.parse(localStorage.getItem('danhsachkyhoc')) || [
    {
        ten_ky: "ky1",
        danh_sach_mon: []
    },
    {
        ten_ky: "ky2",
        danh_sach_mon: []
    },
    {
        ten_ky: "ky3",
        danh_sach_mon: []
    },
]

// Hàm thêm các option môn học vào nút select    
danhsachmon.forEach(function (monhoc, id) {
    let optionElement = document.createElement("option");
    optionElement.text = monhoc.ma_mon;
    optionElement.value = id;
    code_course.appendChild(optionElement);
});

code_course.addEventListener('change', () => {
    // Lấy giá trị mới của "code_course" khi thay đổi
    code_course_value = code_course.value;
});

btn_add_course.addEventListener('click', () => {
    danhsachkyhoc.forEach(kyhoc => {
        if (danhsachmon.length >= 0 && kyhoc.ten_ky == semester.value) {
            if (danhsachmon[code_course_value]) {
                kyhoc.danh_sach_mon.push(danhsachmon[code_course_value])
            } else {
                kyhoc.danh_sach_mon.push(danhsachmon[0])
            }
        }
    })
    localStorage.setItem('danhsachkyhoc', JSON.stringify(danhsachkyhoc))
})


calculator.addEventListener('click', () => {
    main_calculator.classList.remove('hide')
    main_list.classList.add('hide')

})

list.addEventListener('click', () => {
    main_list.classList.remove('hide')
    main_calculator.classList.add('hide')

})


var header = document.querySelector('.header')

header.addEventListener('click', () => {
    main_list.classList.add('hide')
    main_calculator.classList.add('hide')
})




icon_menu.addEventListener('click', () => {
    side_bar.classList.toggle('scale_width')
})




//addRow
const codeInput = document.querySelector('.code_course');
const nameInput = document.querySelector('.name_course');
const table = document.getElementById('myTable');
const btnCharge = document.getElementById('btnCharge')

// Bắt sự kiện khi người dùng nhấn Enter trên input code_course hoặc name_course
codeInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTableRow();
    }
});

// nameInput.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         addTableRow();
//     }
// });




// Hàm thêm hàng mới vào bảng
function addTableRow() {
    const codeValue = codeInput.value;
    const nameValue = numberCredits.value * coefficient.value * 450000;

    // Tạo một hàng mới trong bảng
    const row = document.createElement('tr');

    // Tạo các cột trong hàng
    const codeColumn = document.createElement('td');
    codeColumn.textContent = codeValue;

    const nameColumn = document.createElement('td');
    nameColumn.textContent = nameValue + ' ' + 'VNĐ';

    // Thêm cột vào hàng
    row.appendChild(codeColumn);
    row.appendChild(nameColumn);

    // Thêm hàng vào bảng
    table.appendChild(row);

    // Xóa giá trị trong input
    codeInput.value = '';
    nameInput.value = '';
}

const addCourse = () => {
    let luu_tien_mon = {
        ma_mon: codeInput.value,
        ten_mon: nameInput.value,
        he_so: numberCredits.value,
        tin_chi: coefficient.value
    }
    
    let optionElement = document.createElement("option");
    optionElement.text = codeInput.value;
    optionElement.value = danhsachmon.length;
    code_course.appendChild(optionElement);
    
    danhsachmon.push(luu_tien_mon)
    localStorage.setItem('danhsachmon', JSON.stringify(danhsachmon))

    // Xóa giá trị trong input
    codeInput.value = '';
    nameInput.value = '';
}

let tableBase = `<tr>
<th class="1 list_item">STT</th>
<th class="2 list_item">Kỳ học</th>
<th class="3 list_item">Tổng số môn </th>
<th class="4 list_item">Tổng tín chỉ</th>
<th class="5 list_item">Học phí</th>
</tr>`
console.log({danhsachkyhoc})
danhsachkyhoc.forEach(kyhoc => {
    
})



btnCharge.addEventListener('click', addTableRow)
btnAddCourse.addEventListener('click', addCourse)

// tableList.innerHTML = tableBase

// __________________________________________________________________________________________________________________________________
// Lấy các phần tử HTML cần thiết
const semesterSelect = document.getElementById("semester");
const codeCourseSelect = document.getElementById("code_course");
const btnAddList2 = document.getElementById("btn_add_course");
const hocPhi1Element = document.querySelector(".hoc_phi1");
const hocPhi2Element = document.querySelector(".hoc_phi2");
const hocPhi3Element = document.querySelector(".hoc_phi3");

const tin_chi1Element = document.querySelector(".tin_chi1")
const tin_chi2Element = document.querySelector(".tin_chi2")
const tin_chi3Element = document.querySelector(".tin_chi3")

const soMon1Element = document.querySelector(".soMon1")
const soMon2Element = document.querySelector(".soMon2")
const soMon3Element = document.querySelector(".soMon3")


// Khởi tạo biến để lưu tổng học phí cho kỳ 1
let hocPhi1 = 0;
let hocPhi2 = 0;
let hocPhi3 = 0;

let tin_chi1 = 0;
let tin_chi2 = 0;
let tin_chi3 = 0;

let soMon = 0;
let soMon2 = 0;
let soMon3 = 0;


// Bắt sự kiện khi người dùng nhấn nút "Thêm" trên select "code_course"
btnAddList2.addEventListener("click", function () {
  // Lấy giá trị học phí từ môn học được chọn
  const selectedCourseIndex = codeCourseSelect.value;
  const selectedCourse = danhsachmon[selectedCourseIndex];
  const selectedSemester = semesterSelect.value;

 


  const hocPhi = selectedCourse.he_so * selectedCourse.tin_chi * 450000;
  let tin_chi_mon_hoc = selectedCourse.tin_chi;
  
  
  soMon = parseInt(soMon)
  soMon2 = parseInt(soMon2)
  soMon3 = parseInt(soMon3)
  tin_chi1 = parseInt(tin_chi1);
  tin_chi3 = parseInt(tin_chi3);
  tin_chi_mon_hoc = parseInt(tin_chi_mon_hoc);
  // Cập nhật hiển thị của class "tong_ky1"
if (selectedSemester === "ky1") {
    tin_chi1 = tin_chi1 + tin_chi_mon_hoc; 
    tin_chi1Element.textContent = tin_chi1 + " Tín";

    hocPhi1 += hocPhi; // Cộng học phí mới vào tổng
    hocPhi1Element.textContent = hocPhi1.toLocaleString("vi-VN") + " VNĐ";
   
    soMon = 1 + soMon;
    soMon1Element.textContent = soMon + " Môn";
  }
else if(selectedSemester==="ky2"){

    tin_chi2 = tin_chi2 + tin_chi_mon_hoc; 
    tin_chi2Element.textContent = tin_chi2 + " Tín";

    hocPhi2 += hocPhi;
    hocPhi2Element.textContent = hocPhi2.toLocaleString("vi-VN") + " VNĐ";

    soMon2 = soMon2 + 1;
    soMon2Element.textContent = soMon2 + " Môn";
}
else if(selectedSemester==="ky3"){
    tin_chi3 = tin_chi3 + tin_chi_mon_hoc; 
    tin_chi3Element.textContent = tin_chi3 + " Tín";

    hocPhi3 += hocPhi;
    hocPhi3Element.textContent = hocPhi3.toLocaleString("vi-VN") + " VNĐ";

    soMon3 = soMon3 + 1;
    soMon3Element.textContent = soMon3 + " Môn";
}
});

const clearLocalStorageButton = document.getElementById("clearLocalStorage");

// Bắt sự kiện khi nút "Xóa dữ liệu" được nhấn
clearLocalStorageButton.addEventListener("click", function () {
  // Xóa dữ liệu trên localStorage
  localStorage.removeItem('danhsachmon');
  localStorage.removeItem('danhsachkyhoc');

  // Tùy chỉnh thêm bất kỳ xử lý nào khác sau khi xóa dữ liệu
  // Ví dụ: Cập nhật giao diện hoặc thông báo xóa thành công
  alert("Dữ liệu đã được xóa thành công!");

  // Tải lại trang để áp dụng thay đổi (tùy chọn)
  location.reload();
});