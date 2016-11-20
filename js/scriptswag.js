var projectForm = document.getElementById('project');
var stageForm = document.getElementById('stage');
var projectBtn = document.querySelector('input[value=project]');
var stageBtn = document.querySelector('input[value=stage]');


projectForm.classList.add('hide');
stageForm.classList.add('hide');

function Btn() {
    if (this==projectBtn) {
        projectForm.classList.remove('hide');
        stageForm.classList.add('hide');
    }

    else
        if (this==projectBtn) {
            stageForm.classList.remove('hipe');
            projectBtn.classList.add('hide');
        }
}

projectBtn.addEventListener('click', radio);
stageBtn.addEventListener('click',radio);


