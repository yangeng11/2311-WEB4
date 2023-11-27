const advantage = document.getElementsByClassName(`advantage`);


for(let j = 0 ; j < advantage.length ; j ++) {
    for(let i = 0 ; i < advantage[0].childElementCount ; i ++) {

        const 대상 = advantage[j].children[i];

        대상.classList.add('scroll-inter')

        window.addEventListener('scroll', () =>{
            if(대상.getBoundingClientRect().top - window.innerHeight < 0 ) {
                대상.classList.add('active');
            }else {
                대상.classList.remove("active");
            }
        })
    }
}