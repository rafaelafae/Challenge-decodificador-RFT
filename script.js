/*Script for encrypt or decrypt phrases - by Rafaela Faé Theodoro*/
var messageInput = document.querySelector('#input');
var messageOutput = document.querySelector('#output');

function encrypt() {
  var textIn = messageInput.value;

  var resultEncrypt = textIn
  .replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

  var outputElement = document.querySelector('#output');outputElement.innerHTML = '<textarea readonly id= "input">' + resultEncrypt + '</textarea>';
};

function decrypt() {
  var textOut = messageInput.value;

  var resultDecrypt = textOut
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');
  
  var outputElement = document.querySelector('#output');outputElement.innerHTML = '<textarea readonly id= "input">' + resultDecrypt + '</textarea>';

};

function copy() {
  var textCopy = document.getElementById('output');

  if (!textCopy) {
    return;
  }

  var selection = window.getSelection();
  selection.removeAllRanges();
  var range = document.createRange();
  range.selectNodeContents(textCopy);
  selection.addRange(range);

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      showCopyMessage('Copied!');
    } else {
      throw new Error('Failed to copy');
    }
  } catch (err) {
    console.error('Error copying text: ' + err.message);
  }
};

function clearInput() {
  messageInput.value = '';
  messageOutput.innerHTML = '';
};