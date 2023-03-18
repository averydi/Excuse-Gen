import '../style/index.scss';

window.onload = () => {
    document.querySelector('#button').addEventListener("click", () => {
        document.querySelector('#the-excuse').innerHTML = genererateExcuse();  
    });
    console.log('Hello Rigo from the console!');
};

let genererateExcuse = () => {

    let pronoun = ['A','The','Some'];
    let subject = ['jogger','racoon','dog','bird','snake'];
    let action = ['peed on','stepped on','ate my','slapped my'];
    let noun = ['book','food','baby','face']
    let where = ['outside','at the store','in the bathroom','at my house'];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let nounIndex = Math.floor(Math.random() * noun.length);
    let whereIndex = Math.floor(Math.random() * where.length);
    
    return pronoun[pronounIndex] + '' + subject[subjectIndex] + '' + action[actionIndex] + '' + noun[nounIndex] + '' + where[whereIndex]
};