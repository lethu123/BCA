import React from 'react'
import {CardText} from 'reactstrap'
import AppCollapse from '@core/components/app-collapse'

const QACourseDetail = () => {
  const data = [
    {
      title: 'Câu 1: Tại sao phải tham gia khóa học?',
      content: (
        <CardText className="mb-0">
          Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant.
          Tootsie roll sweet candy bear claw chupa chups lollipop toffee.
          Macaroon donut liquorice powder candy carrot cake macaroon fruitcake.
          Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake
          tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream
          pie apple pie topping oat cake dessert. Soufflé icing caramels.
          Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple
          pie.
        </CardText>
      ),
    },
    {
      title: 'Câu 2: Khóa học mang lại những gì?',
      content: (
        <CardText className="mb-0">
          Pie pudding candy. Oat cake jelly beans bear claw lollipop. Ice cream
          candy canes tootsie roll muffin powder donut powder. Topping candy
          canes chocolate bar lemon drops candy canes. Halvah muffin marzipan
          powder sugar plum donut donut cotton candy biscuit. Wafer jujubes
          apple pie sweet lemon drops jelly cupcake. Caramels dessert halvah
          marshmallow. Candy topping cotton candy oat cake croissant halvah
          gummi bears toffee powder.
        </CardText>
      ),
    },
    {
      title: 'Câu 3: Nếu không tham gia chường trình có được không?',
      content: (
        <CardText className="mb-0">
          Gingerbread liquorice liquorice cake muffin lollipop powder chocolate
          cake. Gummi bears lemon drops toffee liquorice pastry cake caramels
          chocolate bar brownie. Sweet biscuit chupa chups sweet. Halvah
          fruitcake gingerbread croissant dessert cupcake. Chupa chups chocolate
          bar donut tart. Donut cake dessert cookie. Ice cream tootsie roll
          powder chupa chups pastry cupcake soufflé.
        </CardText>
      ),
    },
    {
      title: 'Câu 4: Vì sao lại kết thúc?',
      content: (
        <CardText className="mb-0">
          Icing sweet roll cotton candy brownie candy canes candy canes. Pie
          jelly dragée pie. Ice cream jujubes wafer. Wafer croissant carrot cake
          wafer gummies gummies chupa chups halvah bonbon. Gummi bears cotton
          candy jelly-o halvah. Macaroon apple pie dragée bonbon marzipan
          cheesecake. Jelly jelly beans marshmallow.
        </CardText>
      ),
    },
  ]
  return (
    <div className="mt-5">
      <AppCollapse data={data} accordion />
    </div>
  )
}

export default QACourseDetail
