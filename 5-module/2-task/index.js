function toggleText() {
  // функция, скрывающая при первом нажатии "Текст", при повоторном - отображающая

  const text = document.getElementById('text');
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', true);
    }
  });
}
