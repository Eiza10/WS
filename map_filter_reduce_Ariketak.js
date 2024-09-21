
// 1.ariketa
        let zenbakiak = [3,5,8,2,1,11,20]
        zenbakiak.map( zenbakia => { 
            return zenbakia*2})
            console.log(zenbakiak);

// 2.ariketa
        let erabiltzaileak = [
            {
              izena: "jota",
              adina: 20
            },
            {
              izena: "pepe",
              adina: 18
            }
          ];
          
          let emaitzak = erabiltzaileak.map(erabiltzaile => {
            return `${erabiltzaile.izena}-k ${erabiltzaile.adina} urte ditu`;
          });
          
          console.log(emaitzak);

// 3.ariketa
        let zenbakiak2 = [3, 5, 8, 2, 1, 11, 20];

        let bikoitiak = zenbakiak2.filter(zenbaki => zenbaki % 2 === 0);

        console.log(bikoitiak);

// 4.ariketa
        let erabiltzaileak2 = [
            { izena: "Take", adina: 2 },
            { izena: "Pepe", adina: 18 },
            { izena: "Ane", adina: 19 },
            { izena: "Oihane", adina: 9 }
        ];
        
        let adinNagusiak = erabiltzaileak2.filter(erabiltzaile => erabiltzaile.adina >= 18);
        
        console.log(adinNagusiak);

// 5.ariketa
        let zenbakiak3 = [3, 5, 8, 2, 1, 11, 20];

        let batura = zenbakiak3.reduce((acc, zenbaki) => acc + zenbaki, 0);

        console.log(batura); 

// 6.ariketa
        let zaharrena = erabiltzaileak2.reduce((zaharrena, erabiltzaile) => {
            return (erabiltzaile.adina > zaharrena.adina) ? erabiltzaile : zaharrena;
        }, erabiltzaileak2[0]);

        console.log(zaharrena);

// 7.ariketa
        let batura2 = zenbakiak
            .filter(zenbaki => zenbaki % 2 === 0) // Zenbaki bikoitiak iragazi
            .map(zenbaki => zenbaki * 2) // Zenbakiak bikoiztu
            .reduce((acc, zenbaki) => acc + zenbaki, 0); // Bikoiztutako zenbakien batura lortu

        console.log(batura2);

// 8.ariketa
        const users = [
            {
            name: "Alice",
            items: ["apple", "banana"]
            },
            {
            name: "Bob",
            items: ["carrot", "date"]
            }
        ];
        
        const allItems = users.reduce((acc, user) => {
            return acc.concat(user.items);
        }, []);
        
        console.log(allItems);

// 9.ariketa
        const erabiltzaileak3 = [
            {
                izena: "Take",
                adina: 2,
                erosketak: [1200, 50, 500]
            },
            {
                izena: "Pepe",
                adina: 18,
                erosketak: [25, 12, 30]
            },
            {
                izena: "Ane",
                adina: 19,
                erosketak: [1.75, 4.60, 3.00]
            },
            {
                izena: "Oihane",
                adina: 9,
                erosketak: [12, 4, 2.80]
            },
        ];
        const erosketaTotala = erabiltzaileak3
            .filter(erabiltzaile => erabiltzaile.adina >= 18) // 18 urte baino gehiago duten erabiltzaileak
            .map(erabiltzaile => ({
                izena: erabiltzaile.izena,
                erosketak: erabiltzaile.erosketak.reduce((acc, erosketa) => acc + erosketa, 0) // Erosketen totala
            }))
            .reduce((acc, erabiltzaile) => acc + erabiltzaile.erosketak, 0); // Erosketa guztien batura

        console.log(erosketaTotala);

// 10.ariketa
        const students = [
            {
            name: "John",
            scores: [90, 85, 78]
            },
            {
            name: "Sara",
            scores: [89, 92, 95]
            },
            {
            name: "Ane",
            scores: [90, 95, 90]
            },
            {
            name: "Oihane",
            scores: [90, 85, 90]
            },
        ];
        
        const studentsWithAverages = students.map(student => {
            const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
            return {
            name: student.name,
            batezbestekoa: average
            };
        });
        
        console.log(studentsWithAverages);
        
        const bestStudent = studentsWithAverages.reduce((best, student) => {
            return (student.batezbestekoa > best.batezbestekoa) ? student : best;
        }, studentsWithAverages[0]);
        
        console.log(bestStudent);
