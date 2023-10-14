const text = []

const aTags = document.getElementsByTagName("a")
for(const tag of aTags){
    text.push(tag.textContent)
}

chrome.storage.local.set({
    text,
})

chrome.runtime.sendMessage(null, text, (response) => {
    console.log("from the send responce func:"  + response)
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponce) => {
    console.log(msg)
    console.log(sender)
})
