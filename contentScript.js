//define templates
//TODO: pull templates from GitHub and may also support labels
const templateUserStory = `# User Story

As a [persona], I need [some feature] so that [I get some benefit].

## Acceptance Criteria
- [ ] criteria
- [ ] criteria
- [ ] criteria
`

const templateEpic = `# Epic

## Objective

## Research

## Acceptance Criteria
- [ ] criteria
- [ ] criteria
- [ ] criteria

parent of #<issueNumber>
parent of #<issueNumber>
parent of #<issueNumber>
`

const templateBug = `# Bug

## Expected Result

## Actual Result

## Steps to Reproduce

## Support Cases
`

//wait until Waffle.io data is loaded
//TODO: dynamically handle this case
var delayInMilliseconds = 3000

setTimeout(function() {
  console.log('Waffle.io Sugar is running!')

  //visually indicate the extension is running by coloring card headers
  const cards = document.getElementsByClassName('card-header')

  for (card of cards) {
    card.style['background-color'] = '#FFFF00'
  }

  //add template selector to add issue form
  const addHTML = `
    <span class="js-source-select" style="display: block;margin-bottom:10px;">
        <i class="github-icon github-icon-pencil select-icon"></i>
        <div class="dropdown select select-with-icon" tabindex="0">
        <a class="dropdown-menu-toggle" data-toggle="dropdown">
            <div class="dropdown-title template-options-title">Select Template</div>
            <i class="fa fa-angle-down toggle-caret"></i>
        </a>
        <div class="dropdown-menu">
            <div class="dropdown-input-ct">
                <input type="text" placeholder="Select template" class="form-control dropdown-input ">
            </div>
            <ul class="dropdown-menu-item-list">
                <li class="dropdown-menu-item template-option">
                    <span class="source-title">no template</span>
                </li>
                <li class="dropdown-menu-item template-option">
                    <span class="source-title">User Story Template</span>
                </li>
                <li class="dropdown-menu-item template-option">
                    <span class="source-title">Epic Template</span>
                </li>
                <li class="dropdown-menu-item template-option">
                    <span class="source-title">Bug Template</span>
                </li>
            </ul>
            </div>
        </div>
    </span>
    `

  const newCardFormTitle = document.getElementsByClassName(
    'form-control text-input ng-pristine ng-valid'
  )[0]

  newCardFormTitle.insertAdjacentHTML('beforebegin', addHTML)

  //add onClick listeners to options in template selector
  const templateOptions = document.getElementsByClassName('template-option')

  for (templateOption of templateOptions) {
    templateOption.addEventListener('click', event => {
      updateTemplate(event.toElement.innerText)
    })
  }

  //reset template slector to no template after creating new issue
  const addNewButton = document.getElementsByClassName('js-add-new-button')[0] //TODO: remove hardcoded array position

  addNewButton.addEventListener('click', () => {
    document.getElementsByClassName('template-options-title')[0].innerText =
      'no template'
  }) //TODO: remove hardcoded array position

  //replace card description with template when teplate is selected
  function updateTemplate(selectedTemplate) {
    const { children } = document.getElementsByClassName('card-description')[0] //TODO: remove hardcoded array position
    let cardDescription = children[0] //TODO: remove hardcoded array position

    let templateSelectorTitle = document.getElementsByClassName(
      'template-options-title'
    )[0]

    if (selectedTemplate.toLowerCase() == 'user story template') {
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateUserStory
    } else if (selectedTemplate.toLowerCase() == 'epic template') {
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateEpic
    } else if (selectedTemplate.toLowerCase() == 'bug template') {
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateBug
    }
  }
}, delayInMilliseconds)
