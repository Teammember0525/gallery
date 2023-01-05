import { Container, Form, InputGroup, Image, Accordion, Badge } from "react-bootstrap";
import Search from "../../../assets/images/icons/Search.svg";
import Down from "../../../assets/images/icons/Down.svg";
import Plus from "../../../assets/images/icons/Plus.svg";
import NoteLocation from "../../../assets/images/icons/NoteLocation.svg";
import BossProximity from "../../../assets/images/icons/BossProximity.svg";
import Steak from "../../../assets/images/icons/Steak.svg";
import Message from "../../../assets/images/icons/Message.svg";
import Doodle from "../../../assets/images/icons/Doodle.svg";
import InkColor from "../../../assets/images/icons/InkColor.svg";
import NoteColor from "../../../assets/images/icons/NoteColor.svg";
import Pin from "../../../assets/images/icons/Pin.svg";
import Magnet from "../../../assets/images/icons/Magnet.svg";
import Position from "../../../assets/images/icons/Position.svg";
import EmployeeName from "../../../assets/images/icons/EmployeeName.svg";
import DistancetoHQ from "../../../assets/images/icons/DistancetoHQ.svg";
import HomeSquareFootage from "../../../assets/images/icons/HomeSquareFootage.svg";
import Bedrooms from "../../../assets/images/icons/Bedrooms.svg";
import Bathrooms from "../../../assets/images/icons/Bathrooms.svg";
import React, {useState} from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function SideBar() {

  const [title, setTitle] = useState("NOTE");
  const [sort, setSort] = useState("RANDOM");

  const accordionText = [
    {title : "NOTE", Id : "0"},
    {title : "NOTE LOCATION", Id : "1"},
    {title : "PROFILE", Id : "2"},
    {title : "PROPERTY DEED", Id : "3"},
    {title : "PROPERTY", Id : "4"},
  ];

  const selectSort = [
    {id : "0", title : "RANDOM"},
    {id : "1", title : "MOST RARE TO LEAST RARE"},
    {id : "2", title : "LEAST RARE TO MOST RARE"},
    {id : "3", title : "NOTE # (LOW TO HIGH)"},
    {id : "4", title : "NOTE # (HIGH TO LOW)"},
  ];

  const note_location = [
    {id : '0', title : 'Black 1', percentage: '1'},
    {id : '1', title : 'Black 2', percentage: '1'},
    {id : '2', title : 'Black 3', percentage: '1'},
    {id : '3', title : 'Black 4', percentage: '1'},
    {id : '4', title : 'Black 5', percentage: '1'},
    {id : '5', title : 'Black 6', percentage: '1'},
    {id : '6', title : 'Blue', percentage: '10'},
    {id : '7', title : 'Green', percentage: '10'},
    {id : '8', title : 'Neon Blue', percentage: '5'},
    {id : '9', title : 'Neon Green', percentage: '5'},
  ]

  const [note_location_filter_list, setNote] = useState([]);

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const SelectedTitle = (title) => {
    setTitle(title);
  }

  const SelectedSort = (title) => {
    setSort(title);
  }

  const selectedNoteLocation = (event, title) => {
    if(event.target.checked) {
      setNote((prev) => {
        let a = [...prev];
        a.push(title);
        prev = a;
        return prev;
      })
    }else {
      const index = note_location_filter_list.indexOf(title);
        if (index > -1) {
          setNote((prev) => {
            prev =  prev.filter(function(item) {
              return item !== title
            });
            return prev;
          })
        }
    }
  }

  return (
    <div className="SideBar">
      <div className="search-part">
        <Form.Label className="custom-label">Find by Note #</Form.Label>
        <InputGroup className="mb-3 custom-input">
          <InputGroup.Text id="basic-addon1" className="custom-group-text">
            <Image src={Search} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter Note #..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            className="form-control-custom"
          />
        </InputGroup>
      </div>
      <div className="screen-part">
        <Form.Label className="custom-label">Screen</Form.Label>
        <Accordion defaultActiveKey="0" className="mb-3">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p className="mb-0 fw-bold label-fs">{title}</p>
              <Image src={Down} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0" id="note_accordian">
              {
                accordionText.map((item, idx) => (
                  <p className="accordion-button accordion-custom-item" key={idx} id={item.Id} onClick={(e) => SelectedTitle(item.title)}><CustomToggle eventKey={item.Id}>{item.title}</CustomToggle></p>    
                ))
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="sort-part">
        <Form.Label className="custom-label">Sort</Form.Label>
        <Accordion defaultActiveKey="0" className="mb-3">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <p className="mb-0 fw-bold label-fs">{sort}</p>
              <Image src={Down} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0" id="sort_accordion">
              {
                selectSort.map((item, index) => (
                  <p className="accordion-button accordion-custom-item" key={index} id={item.id} onClick={(e) => SelectedSort(item.title)}><CustomToggle eventKey={item.id}>{item.title}</CustomToggle></p>
                ))
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="filter-part">
        <Form.Label className="custom-label">Filter</Form.Label>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={NoteLocation} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">NOTE LOCATION</span>
                <span className="ms-2 custom-badge" style={{'display' : note_location_filter_list.length === 0 ? 'none': 'inline-block'}}>{note_location_filter_list.length}</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs mb-3">
                {
                  note_location.map((item, index) => (
                    <div className="checkbox-part mb-2">
                      <Form.Check aria-label="option 2" className="custom-checkbox" onChange={(e) => selectedNoteLocation(e, item.title)}/>
                      <span className="check-title">{item.title}</span>
                      <span className="check-percentage"> ({item.percentage}%)</span>
                    </div>   
                  ))
                }
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={BossProximity} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">BOSS PROXIMITY</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Steak} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">STAKING</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Message} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">MESSAGE</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Doodle} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">DOODLE</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={InkColor} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">INK COLOR</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={NoteColor} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">NOTE COLOR</span>
                <span className="ms-2 custom-badge">1</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Pin} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">PIN</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Magnet} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">MAGNET</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={EmployeeName} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">EMPLOYEE NAME</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Position} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">POSITION</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={DistancetoHQ} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">DISTANCE TO HQ</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={HomeSquareFootage} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">HOME SQFT</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter">
              <div>
                <Image src={Bedrooms} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">BEDROOMS</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1" className="border border-0">
            <Accordion.Header className="accordion-filter add-border">
              <div>
                <Image src={Bathrooms} width='24' />
                <span className="mb-0 ms-2 fw-bold label-fs">BATHROOMS</span>
              </div>
              <Image src={Plus} width="24" />
            </Accordion.Header>
            <Accordion.Body className="p-0 accordion-boarder-none">
              <InputGroup className="mb-3 custom-input">
                <InputGroup.Text id="basic-addon1" className="custom-group-text">
                  <Image src={Search} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="form-control-custom"
                />
              </InputGroup>
              <div className="checkboxs">
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 1</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 2</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 3</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 4</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 5</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Black 6</span>
                  <span className="check-percentage"> (1%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Blue</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Green</span>
                  <span className="check-percentage"> (10%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Blue</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
                <div className="checkbox-part mb-2">
                  <Form.Check aria-label="option 2" className="custom-checkbox"/>
                  <span className="check-title">Neon Green</span>
                  <span className="check-percentage"> (5%)</span>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>  
    </div>
  ); 
}

export default SideBar;