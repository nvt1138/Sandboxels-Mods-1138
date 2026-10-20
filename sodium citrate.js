
elements.sodium_citrate = {
    color: ["#f5f3e8", "#e8e5d8", "#fffdf5"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 1760,
    tempHigh: 300,
    stateHigh: "molten_sodium_citrate",
    reactions: {},
    desc: "Sodium citrate (Na3C6H5O7), a component of Benedict's reagent."
};

elements.molten_sodium_citrate = {
    color: ["#f5e7bd", "#e9d9a7"],
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    density: 1700,
    tempLow: 300,
    stateLow: "sodium_citrate",
    reactions: {}
};
