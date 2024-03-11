
$(document).ready(function () {
    $('.readmore').click(function (event) {
        event.preventDefault();
        var description = document.querySelector('#product-description');
        console.log(description.style.height)
        if (description.style.height === ''){
          description.style.height = 'auto';
          document.querySelector('.readmore').classList.remove('arrow-down');
          document.querySelector('.readmore').classList.add('arrow-up');
        } else if (description.style.height === 'auto'){
          description.style.height = '';
          document.querySelector('.readmore').classList.remove('arrow-up');
          document.querySelector('.readmore').classList.add('arrow-down');
        }
        else{
          description.style.height = '200px';
        }
        $(this).text($(this).text() == 'Show Less' ? 'Show More' : 'Show Less');
        
    });
    });