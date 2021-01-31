import React from 'react';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import instagramIcon from '../../assets/instagram.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    backgroundColor: 'black',
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: '0px',
    color: 'white !important',
    backgroundColor: 'black',
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: '0px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
}))(MuiAccordionDetails);

const Wrapper = styled.div`
  background-color: black;
  padding: 20px;
`;

const AccordionWrapper = styled.div`
  margin-top: -10px;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  margin-left: -10px;
  display: flex;
  column-gap: 10px;
`;

const Footer = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const panels = [
    {
      id: 'panel1',
      title: 'Customer Service',
      entries: [
        'Accessibility',
        'Contact Us',
        'Return Policy',
        'FAQ',
        'Gift Certificates',
        'Wishlist',
      ],
    },
    {
      id: 'panel2',
      title: 'Company',
      entries: [
        'About Us',
        'Careers',
        'Press',
        'Affiliates',
      ],
    },
  ];

  return (
    <Wrapper>
      <AccordionWrapper>
        {panels.map(item => (
          <Accordion square expanded={expanded === item.id} onChange={handleChange(item.id)}>
            <AccordionSummary
              expandIcon={expanded === item.id ? <RemoveIcon className="color-white" /> : <AddIcon className="color-white" />}
            >
              <div className="text-title">{item.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              {
                item.entries.map(entry => (
                  <div className="text-subtitle">{entry}</div>
                ))
              }
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionWrapper>
      <div className="text-title color-white">Follow Us</div>
      <IconWrapper>
        <img className="icon" src={facebookIcon} />
        <img className="icon" src={instagramIcon} />
        <img className="icon" src={twitterIcon} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Footer;
