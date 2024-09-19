export default function parseHTMLContent(htmlString) {

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const images = doc.querySelectorAll('img');


    if (images.length > 0) {
        images.forEach((img) => {
            const src = img.getAttribute('src');

            const imageElement = document.createElement('img');
            imageElement.src = src;


            document.getElementById('imageContainer').appendChild(imageElement);
        });
    }
    const textContent = doc.body.innerHTML;

    // 
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.innerHTML = textContent;
}

// Məsələn, bu funksiyanı istifadə etmək:
//   parseHTMLContent(yourQuestionObject.questionHeaderText);
