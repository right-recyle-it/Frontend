const applyButton = document.getElementById("apply_btn");
const applyImage = document.getElementById("apply_image");

    // 라디오 버튼 클릭 시 버튼 이미지 및 활성화 상태 변경 함수
    function updateButtonState() {
        const radioButtons = document.querySelectorAll('input[name="contact"]');
        let checkedRadioButton = false;

        radioButtons.forEach(radioButton => {
            if (radioButton.checked) {
                checkedRadioButton = true;
            }
        });

        if (checkedRadioButton) {
            applyButton.disabled = false;
            applyImage.src = "../img/apply_btn.svg";
        } else {
            applyButton.disabled = true;
            applyImage.src = "../img/not_apply_btn.svg";
        }
    }

    // 라디오 버튼 클릭 이벤트 리스너 등록
    const radioInputs = document.querySelectorAll('input[name="contact"]');
    radioInputs.forEach(radioInput => {
        radioInput.addEventListener("click", updateButtonState);
    });
    // 초기 버튼 상태 설정
    updateButtonState();

    // 뒤로 가기 버튼 클릭 시 페이지 이동
const backButton = document.getElementById("back_btn");
backButton.addEventListener("click", function() {
    window.location.href = "information-sharing.html"; // 이동할 페이지의 경로를 입력하세요
});