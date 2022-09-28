// import hStartup from 'assets/images/icons/hstartup-icon.svg'
import {MapPin, ShoppingBag, Server, Check} from 'react-feather'
import {Badge} from 'reactstrap'

export const iconsData = [
  {
    title: 'Team Building',
    content: 'Invoices have been paid to the company.',
    icon: <Check size={14} />,
    meta: '12 min ago',
    className: 'active',
  },
  {
    title: 'Comprehension',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    icon: <Check size={14} />,
    color: 'secondary',
  },
  {
    title: 'Ideation',
    content: 'Click the button below to read financial reports',
    meta: '2 hours ago',
    icon: <Check size={14} />,
    color: 'success',
  },
  {
    title: 'Opportunity',
    content: 'Have to interview Katy Turner for the developer job.',
    meta: '03:00 PM',
    icon: <MapPin size={14} />,
    color: 'warning',
  },
  {
    title: 'Business Model Canvas',
    content:
      'Develop an online store of electronic devices for the provided layout, as well as develop a mobile version of it.',
    meta: '03:00PM',
    icon: <ShoppingBag size={14} />,
    color: 'danger',
  },
  {
    title: 'Product Management',
    icon: <Server size={14} />,
    content:
      'Our main goal is to design a new mobile application for our client. The customer wants a clean & flat design.',
    meta: (
      <Badge color="light-primary" pill>
        Design
      </Badge>
    ),
    color: 'info',
  },
]
