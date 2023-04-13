<?php
function caesarCipher($str, $shift) {
  $result = "";
  $len = strlen($str);
  for ($i = 0; $i < $len; $i++) {
    $ascii = ord($str[$i]); // get ASCII code of character
    if (ctype_alpha($str[$i])) { // check if character is a letter
      $shiftedAscii = (($ascii + $shift - 65) % 26) + 65; // shift ASCII code
      $result .= chr($shiftedAscii); // convert ASCII code back to character
    } else {
      $result .= $str[$i]; // non-letter characters are kept as is
    }
  }
  return $result;
}

// Get user input from command line
echo "Enter a string to encrypt: ";
$inputStr = trim(fgets(STDIN));
echo "Enter the number of positions to shift the letters: ";
$shift = trim(fgets(STDIN));

// Call caesarCipher function with user input
$encryptedStr = caesarCipher($inputStr, $shift);
echo "Encrypted string: " . $encryptedStr;
?>
