function primerNumbers(N = 100) {
    for (let i = 1; i <= N; i++) {

        let j = 2,
            primer = true;
        while (j <= Math.sqrt(i) && primer) {
            if (i % j == 0)
                primer = false;
            else
                j++;
        }
        if (primer)
            document.write(i + "<br>");

    }
}
primerNumbers(300);