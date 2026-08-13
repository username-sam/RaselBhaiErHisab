function showButtonIfConditionMet() {
    
    const allRows = document.querySelectorAll('table tr');
    
    const lastRow = allRows[allRows.length - 1];
    
    const cellsInLastRow = lastRow.querySelectorAll('td');
    
    const slValue = parseInt(cellsInLastRow[0].textContent);
    
    const currentBalance = parseInt(cellsInLastRow[4].textContent.replace(/,/g, ''));
    
    const button = document.querySelector('button');
    
    if (slValue === 17 || currentBalance === 0) {
        button.style.display = 'block';
    } 
    else {
        button.style.display = 'none';
    }
}

showButtonIfConditionMet();


