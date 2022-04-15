chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'withTitle',
    title: 'with title: "%s"',
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: 'withDescription',
    title: 'with description: "%s"',
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const url = 'https://www.google.com/calendar/event?action=TEMPLATE'
  switch (info.menuItemId) {
    case 'withTitle':
      chrome.tabs.create({
        url: url + '&text=' + info.selectionText
      });
      break;
    case 'withDescription':
      chrome.tabs.create({
        url: url + '&details=' + info.selectionText
      });
      break;
  }
});
