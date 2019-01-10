//doesn't run until the webpage is already loaded

var delayInMilliseconds = 3000 //1 second

const templateUserStory = `
**User Story**

As a <persona>, I need <some feature> So That <I get some benefit>.

Acceptance Criteria
- [ ] criteria
- [ ] criteria
- [ ] criteria
`

const templateEpic = `
**Epic**

Objective

Research

Acceptance Criteria
- [ ] criteria
- [ ] criteria
- [ ] criteria

parent of #<issueNumber>
parent of #<issueNumber>
parent of #<issueNumber>
`

const templateBug = `
**Bug**

Expected Result

Actual Result

Steps to Reproduce

Support Cases
`

setTimeout(function() {
  console.log('Waffle.io Sugar is running!')

  const cards = document.getElementsByClassName('card-header')

  for (card of cards) {
    card.style['background-color'] = '#FFFF00'
  }

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

  const newCardForm = document.getElementsByClassName(
    'form-control text-input ng-pristine ng-valid'
  )[0]

  const newOuterHTML = newCardForm.outerHTML + addHTML

  newCardForm.outerHTML = newOuterHTML

  const templateOptions = document.getElementsByClassName('template-option')

  console.log('templateOptions', templateOptions)

  for (templateOption of templateOptions) {
    templateOption.addEventListener('click', event => {
      console.log('click', event.toElement.innerText)
      updateTemplate(event.toElement.innerText)
    })
  }

  function updateTemplate(selectedTemplate) {
    const { children } = document.getElementsByClassName('card-description')[0]
    //hardcoded - TODO
    let cardDescription = children[0]

    let templateSelectorTitle = document.getElementsByClassName(
      'template-options-title'
    )[0]

    console.log('templateSelectorTitle', templateSelectorTitle)

    if (selectedTemplate.toLowerCase() == 'user story template') {
      console.log('using user story template...')
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateUserStory
    } else if (selectedTemplate.toLowerCase() == 'epic template') {
      console.log('using epic template...')
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateEpic
    } else if (selectedTemplate.toLowerCase() == 'bug template') {
      console.log('using bug template...')
      templateSelectorTitle.innerText = selectedTemplate
      cardDescription.value = templateBug
    } else {
      console.log('no template for selected template')
    }
  }
}, delayInMilliseconds)
