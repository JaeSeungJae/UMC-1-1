const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const ageElement = document.getElementById('age');
const pwElement = document.getElementById('pw');
const pwcheckElement = document.getElementById('pw-check');
const button = document.getElementById('submit-button');

button.onclick = () => {
    const name = nameElement.value;
    const email = emailElement.value;
    const age = ageElement.value;
    const pw = pwElement.value;
    const pwCheck = pwcheckElement.value;
    let errors = []; // To store error messages
    let corrects = [];
  
  // Name should be a non-empty string
  if (!name) {
    errors.push('필수 입력 항목입니다!');
    corrects.push('');
  }
  else {
    errors.push('');
    corrects.push('멋진 이름이네요.');
  }

  // Email should contain an @ symbol
  if (email.indexOf('@') === -1) {
    errors.push('올바른 이메일 형식이 아닙니다.');
    corrects.push('');
  }
  else {
    errors.push('');
    corrects.push('올바른 이메일 형식입니다!');
  }

  // Age should be an integer of 19 or greater
  if (!(Number(age))) {
    errors.push('나이는 숫자 형식이어야 합니다!');
    corrects.push('');
  }
  else if (Number(age) < 0) {
    errors.push('나이는 음수가 될 수 없습니다!');
    corrects.push('');
  }
  else if (Number(age) % 1 !== 0) {
    errors.push('나이는 소수가 될 수 없습니다!');
    corrects.push('');
  }
  else if (Number(age) < 19) {
    errors.push('미성년자는 가입할 수 없습니다!');
    corrects.push('');
  }
  else {
    errors.push('');
    corrects.push('올바른 나이 형식입니다!');
  }

  // Password should be 4-12 characters long and contain both letters and numbers
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W).{4,12}$/;
  if (!pwRegex.test(pw)) {
    errors.push('비밀번호는 최소 4자리 최대 12자리이어야 합니다.');
    corrects.push('');
  }
  else {
    errors.push('');
    corrects.push('올바른 비밀번호입니다!');
  }

  // Password and password check should match
  if (pw !== pwCheck || !pwCheck) {
    errors.push('비밀번호가 일치하지 않습니다.');
    corrects.push('');
  }
  else {
    errors.push('');
    corrects.push('비밀번호가 일치합니다.');
  }
  document.getElementById('error-name').textContent = errors[0];
  document.getElementById('error-email').textContent = errors[1];
  document.getElementById('error-age').textContent = errors[2];
  document.getElementById('error-pw').textContent = errors[3];
  document.getElementById('error-pwcheck').textContent = errors[4];
  document.getElementById('cor-name').textContent = corrects[0];
  document.getElementById('cor-email').textContent = corrects[1];
  document.getElementById('cor-age').textContent = corrects[2];
  document.getElementById('cor-pw').textContent = corrects[3];
  document.getElementById('cor-pwcheck').textContent = corrects[4];
  // If there are any errors, alert them, otherwise alert success
};