function hydrateCrew(obj) {
    const waterNeeded = obj.weight * 0.1  * obj.experience;
    if (obj.dizziness === true) {
        obj.levelOfHydrated = waterNeeded;
        obj.dizziness = false;
    }
    return obj;
}

console.log(hydrateCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ))