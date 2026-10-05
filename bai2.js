let circulationLogs = [
    {
        logId: "L01",
        studentCode: "SV001",
        bookIsbn: "ISBN001",
        status: "BORROWING",
        fineAmount: 0
    },
    {
        logId: "L02",
        studentCode: "SV002",
        bookIsbn: "ISBN002",
        status: "RETURNED",
        fineAmount: 10000
    },
    {
        logId: "L03",
        studentCode: "SV003",
        bookIsbn: "ISBN003",
        status: "LOST",
        fineAmount: 200000
    }
];

let studentCode = "SV004";

if (studentCode != "") {
    circulationLogs.push({
        logId: "L04",
        studentCode: studentCode,
        bookIsbn: "ISBN004",
        status: "BORROWING",
        fineAmount: 0
    });
}

for (let log of circulationLogs) {
    if (log.logId == "L01") {
        let lost = false;
        let lateDays = 3;

        if (lost) {
            log.status = "LOST";
            log.fineAmount = 200000;
        } else {
            log.status = "RETURNED";
            log.fineAmount = lateDays * 5000;
        }
    }
}

circulationLogs = circulationLogs.filter(function(log) {
    return !(log.status == "RETURNED" && log.fineAmount == 0);
});

let borrowingCount = 0;
let totalFine = 0;

for (let log of circulationLogs) {
    if (log.status == "BORROWING") {
        borrowingCount++;
    }

    totalFine += log.fineAmount;
}

console.log("\n" + "=".repeat(50));
console.log("       BÁO CÁO LƯU CHUYỂN SÁCH");
console.log("=".repeat(50));

for (let log of circulationLogs) {
    console.log(
        log.logId.padEnd(8) +
        log.studentCode.padEnd(12) +
        log.bookIsbn.padEnd(12) +
        log.status.padEnd(12) +
        log.fineAmount.toLocaleString() + " VNĐ"
    );
}

console.log("-".repeat(50));
console.log("Tổng sách đang mượn :", borrowingCount);
console.log("Tổng tiền phạt      :", totalFine.toLocaleString(), "VNĐ");
console.log("=".repeat(50));