const WAKE_SEPARATIONS = {
  ARRIVAL: {
    NAME: "ARRIVAL",
    LABEL: "ARRIVAL - FULL LENGTH / CROSS RUNWAY",
    SUPER: {
      HEAVY: {
        mins: 3,
        distance: 6,
      },
      MEDIUM: {
        mins: 3,
        distance: 7,
      },
      LIGHT: {
        mins: 4,
        distance: 8,
      },
    },
    HEAVY: {
      HEAVY: {
        mins: 0,
        distance: 4
      },
      MEDIUM: {
        mins: 2,
        distance: 5,
      },
      LIGHT: {
        mins: 3,
        distance: 6,
      },
    },
    MEDIUM: {
      LIGHT: {
        mins: 3,
        distance: 5,
      },
    },
  },
  DISPLACED: {
    NAME: "DISPLACED",
    LABEL: "DISPLACED THRESHOLD",
    SUPER: {
      HEAVY: {
        mins: 3,
        distance: "N/A",
      },
      MEDIUM: {
        mins: 3,
        distance: "N/A",
      },
      LIGHT: {
        mins: 3,
        distance: "N/A",
      },
    },
    HEAVY: {
      MEDIUM: {
        mins: 2,
        distance: "N/A",
      },
      LIGHT: {
        mins: 2,
        distance: "N/A",
      },
    },
    MEDIUM: {
      LIGHT: {
        mins: 2,
        distance: "N/A",
      },
    },
  },
  OPPOSITE: {
     NAME: "OPPOSITE",
    LABEL: "OPPOSITE DIRECTION",
    SUPER: {
      HEAVY: {
        mins: 3,
        distance: "N/A",
      },
      MEDIUM: {
        mins: 3,
        distance: "N/A",
      },
      LIGHT: {
        mins: 3,
        distance: "N/A",
      },
    },
    HEAVY: {
      MEDIUM: {
        mins: 2,
        distance: "N/A",
      },
      LIGHT: {
        mins: 2,
        distance: "N/A",
      },
    },
    MEDIUM: {
      LIGHT: {
        mins: 2,
        distance: "N/A",
      },
    },
  },
  DEPARTURE: {
     NAME: "DEPARTURE",
    LABEL: "FULL LENGTH DEPARTURE / CROSS RUNWAY",
    SUPER: {
      HEAVY: {
        mins: 2,
        distance: 6,
      },
      MEDIUM: {
        mins: 3,
        distance: 7,
      },
      LIGHT: {
        mins: 3,
        distance: 8,
      },
    },
    HEAVY: {
      HEAVY: {
        mins: "N/A",
        distance: 4,
      },
      MEDIUM: {
        mins: 2,
        distance: 5,
      },
      LIGHT: {
        mins: 2,
        distance: 6,
      },
    },
    MEDIUM: {
      LIGHT: {
        mins: 2,
        distance: 5,
      },
    },
  },
  INTERMEDIATE: {
     NAME: "INTERMEDIATE",
    LABEL: "DEPARTURE - INTERMEDIATE POINT",
    SUPER: {
      HEAVY: {
        mins: 4,
        distance: "N/A",
      },
      MEDIUM: {
        mins: 4,
        distance: "N/A",
      },
      LIGHT: {
        mins: 4,
        distance: "N/A",
      },
    },
    HEAVY: {
      MEDIUM: {
        mins: 3,
        distance: "N/A",
      },
      LIGHT: {
        mins: 3,
        distance: "N/A",
      },
    },
    MEDIUM: {
      LIGHT: {
        mins: 3,
        distance: "N/A",
      },
    },
  },
};

const AC_TYPES = {
    SUPER: ['A388'],
    HEAVY: ['B747', 'B787', 'B777','B767', 'A350', 'A340', 'A330'],
    MEDIUM: ['B737', 'A320', 'A321', 'A319', 'DH8C', 'C130', 'AS32' ],
    LIGHT: ['PA28', 'PA31', 'C182', 'C500']
};

export const getRandomType = (category) => {
    const wakeTypes = AC_TYPES[category]
    return wakeTypes[Math.floor(Math.random()*wakeTypes.length)];
};

export const checkSeparation = (standard, leader, follower) => {
    if (leader in standard) {
        if (follower in standard[leader]) {
            return standard[leader][follower]
        }
    }
    return {
        mins: "N/A",
        distance: "N/A"
    }
} 

export const getRandomStandard = () => {
    const key = Object.keys(WAKE_SEPARATIONS)[Math.floor(Math.random() * Object.keys(WAKE_SEPARATIONS).length)]
    return WAKE_SEPARATIONS[key]
}

export const getRandomWake = () => {
    const categories = ["SUPER", "HEAVY", "MEDIUM", "LIGHT"]
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex]
}