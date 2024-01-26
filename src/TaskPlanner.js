import React, { useState, useEffect } from "react";
import personsData from "./persons"; // Assurez-vous que le chemin est correct
import tasksData from "./tasks"; // Assurez-vous que le chemin est correct

const TaskPlanner = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [persons, setPersons] = useState(personsData);
  const [selections, setSelections] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [
    "Toute la semaine",
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI",
    "DIMANCHE",
  ];
  const [showSimplifiedView, setShowSimplifiedView] = useState(false);

  const toggleView = () => {
    setShowSimplifiedView(!showSimplifiedView);
  };

  useEffect(() => {
    // Initialisation des sélections en tant que tableaux vides
    let initialSelections = {};
    tasks.forEach((task) => {
      days.forEach((day) => {
        initialSelections[`${task.name}-${day}`] = [];
      });
    });
    setSelections(initialSelections);
  }, [tasks, persons]);

  const handleOpenModal = (task, day) => {
    setSelectedTask(task);
    setSelectedDay(day);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectionChange = (personName, isChecked) => {
    const key = `${selectedTask.name}-${selectedDay}`;
    let updatedSelections = { ...selections };

    // Gérer la sélection pour "Absents - Toute la semaine"
    if (selectedTask.name === "Absents" && selectedDay === "Toute la semaine") {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Absents-${day}`] = [
            ...new Set([...updatedSelections[`Absents-${day}`], personName]),
          ];
        } else {
          updatedSelections[`Absents-${day}`] = updatedSelections[
            `Absents-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Cuisine - Toute la semaine"
    if (selectedTask.name === "Cuisine" && selectedDay === "Toute la semaine") {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Cuisine-${day}`] = [
            ...new Set([...updatedSelections[`Cuisine-${day}`], personName]),
          ];
        } else {
          updatedSelections[`Cuisine-${day}`] = updatedSelections[
            `Cuisine-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Nettoyage - Toute la semaine"
    if (
      selectedTask.name === "Nettoyage" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Nettoyage-${day}`] = [
            ...new Set([...updatedSelections[`Nettoyage-${day}`], personName]),
          ];
        } else {
          updatedSelections[`Nettoyage-${day}`] = updatedSelections[
            `Nettoyage-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "S.A.V. (8h-16h) - Toute la semaine"
    if (
      selectedTask.name === "S.A.V. (8h-16h)" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`S.A.V. (8h-16h)-${day}`] = [
            ...new Set([
              ...updatedSelections[`S.A.V. (8h-16h)-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`S.A.V. (8h-16h)-${day}`] = updatedSelections[
            `S.A.V. (8h-16h)-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "S.A.V. (9h-17h) - Toute la semaine"
    if (
      selectedTask.name === "S.A.V. (9h-17h)" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`S.A.V. (9h-17h)-${day}`] = [
            ...new Set([
              ...updatedSelections[`S.A.V. (9h-17h)-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`S.A.V. (9h-17h)-${day}`] = updatedSelections[
            `S.A.V. (9h-17h)-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "S.A.V. (11h-19h) - Toute la semaine"
    if (
      selectedTask.name === "S.A.V. (11h-19h)" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`S.A.V. (11h-19h)-${day}`] = [
            ...new Set([
              ...updatedSelections[`S.A.V. (11h-19h)-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`S.A.V. (11h-19h)-${day}`] = updatedSelections[
            `S.A.V. (11h-19h)-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Astreinte Prestataires / Repassage - Toute la semaine"
    if (
      selectedTask.name === "Astreinte Prestataires / Repassage" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Astreinte Prestataires / Repassage-${day}`] = [
            ...new Set([
              ...updatedSelections[`Astreinte Prestataires / Repassage-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`Astreinte Prestataires / Repassage-${day}`] =
            updatedSelections[
              `Astreinte Prestataires / Repassage-${day}`
            ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Pilote Session - Toute la semaine"
    if (
      selectedTask.name === "Pilote Session" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Pilote Session-${day}`] = [
            ...new Set([
              ...updatedSelections[`Pilote Session-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`Pilote Session-${day}`] = updatedSelections[
            `Pilote Session-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Boutique Toulon - Toute la semaine"
    if (
      selectedTask.name === "Boutique Toulon" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Boutique Toulon-${day}`] = [
            ...new Set([
              ...updatedSelections[`Boutique Toulon-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`Boutique Toulon-${day}`] = updatedSelections[
            `Boutique Toulon-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Gérer la sélection pour "Boutique Paris - Toute la semaine"
    if (
      selectedTask.name === "Boutique Paris" &&
      selectedDay === "Toute la semaine"
    ) {
      days.forEach((day) => {
        if (isChecked) {
          updatedSelections[`Boutique Paris-${day}`] = [
            ...new Set([
              ...updatedSelections[`Boutique Paris-${day}`],
              personName,
            ]),
          ];
        } else {
          updatedSelections[`Boutique Paris-${day}`] = updatedSelections[
            `Boutique Paris-${day}`
          ].filter((name) => name !== personName);
        }
      });
      setSelections(updatedSelections);
      return;
    }

    // Cas général pour toutes les tâches sauf "Cuisine" et "Nettoyage"
    if (selectedTask.name !== "Cuisine" && selectedTask.name !== "Nettoyage") {
      if (isChecked) {
        if (!updatedSelections[key].includes(personName)) {
          updatedSelections[key].push(personName);
        }
      } else {
        updatedSelections[key] = updatedSelections[key].filter(
          (name) => name !== personName
        );
      }
    }

    // Cas spécifique pour les tâches "Cuisine" et "Nettoyage"
    if (selectedTask.name === "Cuisine" || selectedTask.name === "Nettoyage") {
      if (isChecked) {
        updatedSelections[key].push(personName);
        days
          .filter((day) => day !== selectedDay)
          .forEach((day) => {
            const otherDayKey = `${selectedTask.name}-${day}`;
            updatedSelections[otherDayKey] = updatedSelections[
              otherDayKey
            ].filter((name) => name !== personName);
          });
      } else {
        updatedSelections[key] = updatedSelections[key].filter(
          (name) => name !== personName
        );
      }
    }

    setSelections(updatedSelections);
  };

  const handleDeselectPerson = (personName, selectionKey) => {
    const updatedSelections = { ...selections };
    updatedSelections[selectionKey] = updatedSelections[selectionKey].filter(
      (name) => name !== personName
    );
    setSelections(updatedSelections);
  };

  const handleClearNames = (taskName) => {
    const updatedSelections = { ...selections };
    days.forEach((day) => {
      updatedSelections[`${taskName}-${day}`] = [];
    });
    setSelections(updatedSelections);
  };

  const renderModal = () => {
    let eligiblePersons;

    if (selectedTask.name === "Absents") {
      eligiblePersons = persons;
    } else {
      eligiblePersons = persons.filter((person) => {
        const isAbsent = selections[`Absents-${selectedDay}`]?.includes(
          person.name
        );
        if (isAbsent || !selectedTask.persons.includes(person.name)) {
          return false;
        }
        if (
          selectedTask.name === "Cuisine" ||
          selectedTask.name === "Nettoyage"
        ) {
          const isAlreadyAssigned = days.some((day) =>
            selections[`${selectedTask.name}-${day}`]?.includes(person.name)
          );
          return !isAlreadyAssigned;
        }
        return true;
      });
    }

    return (
      <div className="modal-overlay">
        <div className="modal">
          <span className="close-button" onClick={handleCloseModal}>
            &times;
          </span>
          <h2>
            Sélection pour {selectedTask?.name} - {selectedDay}
          </h2>
          {eligiblePersons.map((person) => {
            const isChecked =
              selections[`Absents-Toute la semaine`]?.includes(person.name) ||
              selections[`${selectedTask.name}-${selectedDay}`]?.includes(
                person.name
              );
            return (
              <div key={person.name} className="modal-name">
                <input
                  type="checkbox"
                  id={`modal-${person.name}`}
                  checked={isChecked}
                  onChange={(e) =>
                    handleSelectionChange(person.name, e.target.checked)
                  }
                />
                <label htmlFor={`modal-${person.name}`}>{person.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTaskTable = () => {
    if (showSimplifiedView) {
      return (
        <table>
  <thead>
    <tr>
      <th>Tâches / Jours</th>
      {days.filter(day => day !== "Toute la semaine").map((day) => (
        <th key={day}>{day}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {tasks.filter(task => task.name !== "Absents").map((task) => (
      <tr key={task.name}>
        <td>{task.name}</td>
        {days.filter(day => day !== "Toute la semaine").map((day) => (
          <td key={`${task.name}-${day}`}>
            {task.days.includes(day) ? (
              <div>
                {selections[`${task.name}-${day}`]?.join(", ")}
              </div>
            ) : (
              <div></div>
            )}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
      );
    } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Tâches / Jours</th>
            <th style={{ width: "5%" }}>Tout Décocher</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.name}>
              <td>
                <div>{task.name}</div>
              </td>
              <td>
                <div>
                  <span
                    className="deselect-button"
                    onClick={() => handleClearNames(task.name)}
                  >
                    &#10005;
                  </span>
                </div>
              </td>
              {days.map((day) => (
                <td style={{ width: "9.5%" }} key={`${task.name}-${day}`}>
                  {day === "Toute la semaine" || task.days.includes(day) ? (
                    <>
                      <button
                        className="button-add"
                        onClick={() => handleOpenModal(task, day)}
                      >
                        +
                      </button>
                      <div>
                        {selections[`${task.name}-${day}`]?.map((name) => (
                          <div key={name}>
                            {name}
                            <span
                              className="deselect-button"
                              onClick={() =>
                                handleDeselectPerson(
                                  name,
                                  `${task.name}-${day}`
                                )
                              }
                            >
                              &#10005;
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    // Si le jour n'est pas autorisé, grisez le bouton
                    <div></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

  return (
    <div className="task-planner">
      <h1>Planning Helper</h1>
      {renderTaskTable()}
      {showModal && renderModal()}
      <button onClick={toggleView}>
        {showSimplifiedView ? "Afficher la vue détaillée" : "Afficher la vue simplifiée"}
      </button>
    </div>
  );
};

export default TaskPlanner;
