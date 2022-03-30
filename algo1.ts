const taskOne = (passengers: number, shuffle: number) => {
    const locations: string[] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];
    let boarded: object[] = [];
    let reservation: object[] = [];
    let count: number = 0;
  
    for (let i = 1; i <= passengers; i++) {
      reservation.push({
        name: `passenger${i}`,
        location: `${locations[(i - 1) % 5]}`,
      });
    }
  
    if (reservation.length >= 50) {
      boarded.push(...reservation.splice(0, 50));
      count++;
    } else {
      boarded.push(...reservation.splice(0, Math.floor(reservation.length / 5) * 5));
      count++;
    }
  
    while (shuffle > 0 && reservation.length > 0) {
      if (reservation.length >= 5 && reservation.length <= 50) {
        boarded.length = 0;
        boarded.push(...reservation.splice(0, Math.floor(reservation.length / 5) * 5)
        );
        count += 1;
        shuffle -= 1;
        break;
      } else if (reservation.length > 50) {
        boarded.length = 0;
        boarded.push(...reservation.splice(0, 50));
        count += 1;
        shuffle -= 1;
      }
    }
  
    return {
      boarded: boarded,
      reservation: reservation,
      count: count,
    };
  };
  
 
  