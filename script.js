// Initialize earnings and referred users
let earnings = 0;
const referredUsers = [];

// Update UI with earnings and referred users list
function updateUI() {
    document.getElementById("earnings").innerText = earnings.toLocaleString();
    const referredUsersList = document.getElementById("referredUsersList");
    if (referredUsers.length > 0) {
        referredUsersList.innerHTML = referredUsers.map(user => `<li>${user}</li>`).join("");
    } else {
        referredUsersList.innerHTML = "<li>No users referred yet.</li>";
    }

    // Disable Withdraw Button if earnings < 5000
    const withdrawButton = document.getElementById("withdrawButton");
    if (withdrawButton) withdrawButton.disabled = earnings < 5000;
}

// Copy referral link to clipboard
function copyLink() {
    const link = document.getElementById("shareLink");
    link.select();
    document.execCommand("copy");
    alert("Referral link copied!");
}

// Open WhatsApp Share
function setupWhatsAppShare() {
    const link = document.getElementById("shareLink").value;
    const whatsappShare = document.getElementById("whatsappShare");
    whatsappShare.href = `https://api.whatsapp.com/send?text=Join now and earn! Here's my referral link: ${link}`;
}
setupWhatsAppShare();

// Redirect to withdrawal page
function goToWithdrawPage() {
    window.location.href = "withdraw.html";
}

// Simulate adding a referred user
function addReferredUser(userName) {
    referredUsers.push(userName);
    earnings += 500;
    updateUI();
}

// Initialize the page
updateUI();
