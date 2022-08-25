var currentTab = 0;

function switchTab(index) {
    document.getElementById("tabSelection" + currentTab).style.color = "#ffffff";
    document.getElementById("tabSelection" + currentTab).style.backgroundColor = "#000000";
    document.getElementById("tab" + currentTab).style.display = "none";
    currentTab = index;
    document.getElementById("tabSelection" + currentTab).style.color = "#000000";
    document.getElementById("tabSelection" + currentTab).style.backgroundColor = "#ffffff";
    document.getElementById("tab" + currentTab).style.display = "inline";
}