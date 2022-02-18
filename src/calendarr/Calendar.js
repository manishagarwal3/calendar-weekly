import React, {Component} from 'react';
import {DayPilot, DayPilotCalendar} from "daypilot-pro-react";

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locale: "en-us",
      columnWidthSpec: "Auto",
      viewType: "Resources",
      headerLevels: 1,
      headerHeight: 30,
      cellHeight: 30,
      crosshairType: "Header",
      showCurrentTime: false,
      eventArrangement: "Cascade",
      allowEventOverlap: false,
    //   timeRangeSelectedHandling: "Enabled",
    //   onTimeRangeSelected: async (args) => {
    //     const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
    //     const dp = args.control;
    //     dp.clearSelection();
    //     if (modal.canceled) { return; }
    //     dp.events.add({
    //       start: args.start,
    //       end: args.end,
    //       id: DayPilot.guid(),
    //       text: modal.result,
    //       resource: args.resource
    //     });
    //   },
    //   eventDeleteHandling: "Disabled",
    //   eventMoveHandling: "Update",
    //   onEventMoved: (args) => {
    //     args.control.message("Event moved: " + args.e.text());
    //   },
    //   eventResizeHandling: "Update",
    //   onEventResized: (args) => {
    //     args.control.message("Event resized: " + args.e.text());
    //   },
    //   eventClickHandling: "Disabled",
    //   eventHoverHandling: "Disabled",
    };
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      //startDate: DayPilot.Date.today(),
      events: [
        {
          id: 1,
          text: "Event 1",
          start: DayPilot.Date.today().addHours(10),
          end: DayPilot.Date.today().addHours(12),
          resource: "R1"
        },
        {
          id: 2,
          text: "Event 2",
          start: "2022-02-17T10:00:00",
          end: "2022-02-17T11:00:00",
          resource: "R2",
          barColor: "#38761d",
          barBackColor: "#93c47d"
        }
      ]
    });

    this.resources5();

  }

  resources5() {
    const columns = [
      { name: "Monday", id: "R1"},
      { name: "Tuesday", id: "R2"},
      { name: "Wednesday", id: "R3"},
      { name: "Thursday", id: "R4"},
      { name: "Friday", id: "R5"}
    ];

    this.setState({
      columnWidthSpec: "Auto",
      columns,
      headerLevels: 1
    });
  }

//   resourceGroups() {
//     const columns = [
//       { name: "Group 1", id: "G1", children: [
//           { name: "Resource 1", id: "R1"},
//           { name: "Resource 2", id: "R2"},
//         ]},
//       { name: "Group 2", id: "G2", children: [
//           { name: "Resource 3", id: "R3"},
//           { name: "Resource 4", id: "R4"}
//         ]},
//       { name: "Group 3", id: "G3", children: [
//           { name: "Resource 5", id: "R5"},
//           { name: "Resource 6", id: "R6"}
//         ]},
//       { name: "Group 4", id: "G4", children: [
//           { name: "Resource 7", id: "R7"},
//           { name: "Resource 8", id: "R8"}
//         ]}
//     ];

//     this.setState({
//       columnWidthSpec: "Auto",
//       columns,
//       headerLevels: 2
//     });
//   }

//   resources50() {

//     const columns = [];
//     for (let i = 1 ; i <= 50; i++) {
//       columns.push({
//         id: i,
//         name: `Resource ${i}`
//       });
//     }

//     this.setState({
//       columnWidthSpec: "Fixed",
//       columnWidth: 100,
//       columns,
//       headerLevels: 1
//     });
//   }

//   daysResources() {

//     const columns = [];

//     for (let i = 0 ; i < 7; i++) {
//       const start = DayPilot.Date.today().addDays(i);

//       const day = {
//         id: i,
//         start,
//         name: `${start.toString("MMMM d, yyyy")}`
//       };

//       day.children = [
//         { name: "R 1", id: "R1", start},
//         { name: "R 2", id: "R2", start},
//         { name: "R 3", id: "R3", start},
//         { name: "R 4", id: "R4", start}
//       ];

//       columns.push(day);

//     }

//     this.setState({
//       columnWidthSpec: "Auto",
//       columns,
//       headerLevels: 2
//     });
//   }
//   resourcesDays() {

//     const columns = [
//       { name: "Resource 1", id: "R1"},
//       { name: "Resource 2", id: "R2"},
//       { name: "Resource 3", id: "R3"},
//       { name: "Resource 4", id: "R4"}
//     ];

//     columns.forEach(col => {
//       col.children = [];
//       for (let i = 0 ; i < 7; i++) {
//         const start = DayPilot.Date.today().addDays(i);

//         const day = {
//           id: col.id,
//           start,
//           name: `${start.toString("ddd")}`
//         };

//         col.children.push(day);
//       }
//     });

//     this.setState({
//       columnWidthSpec: "Auto",
//       columns,
//       headerLevels: 2
//     });
//   }

  render() {
    const {...config} = this.state;
    
    return (
      <div>
        {/* <div className={"space"}>
          Resources view:
          <label><input name="view" type={"radio"} onClick={() => this.resources5()} defaultChecked={true} /> 5 columns</label>
          <label><input name="view" type={"radio"} onClick={() => this.resources50()} /> 50 columns</label>
          <label><input name="view" type={"radio"} onClick={() => this.daysResources()} /> Days/resources</label>
          <label><input name="view" type={"radio"} onClick={() => this.resourcesDays()} /> Resources/days</label>
          <label><input name="view" type={"radio"} onClick={() => this.resourceGroups()} /> Groups</label>
        </div> */}
        <DayPilotCalendar
          {...config}
          ref={component => {
            this.calendar = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Calendar;
