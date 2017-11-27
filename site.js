const selected = [];
const options = document.querySelectorAll('.option');

options.forEach(option => {
  option.addEventListener('click', () => {
    if(selected.length === 2){
      for(let item in selected){
        if(selected[item].id === option.id){
          selected[item].classList.toggle('selected');
          selected.splice(item, 1);
          return;
        }
      }
      selected[0].classList.toggle('selected');
      selected.shift();
    }
    for(let item in selected){
      if(selected[item].id === option.id){
        selected[item].classList.toggle('selected');
        selected.splice(item, 1);
        return;
      }
    }
    option.classList.toggle('selected');
    selected.push(option);
  });
})