function palindrome (word){
    if (word[0] == word[word.length-1]){
        return "it is palindrome"
    }
    
    if(word[0] == word[word.length-1]){
    return palindrome(word.slice(1, -1));
    } 
    else{
        return "it is not a palindrome"
    }
}


console.log(palindrome("radar"));