import Statistics from "./Statistics";
import PropTypes from "prop-types"

function StatisticList({ title, items}) {
   return (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
          <ul class="stat-list">

          { items.map(item => 
      
            <Statistics
            key={item.id}
            label = {item.label}
            percentage ={item.percentage} 
         />
      
        )}
        </ul>
    </section>  )
}

StatisticList.propTypes ={
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        }))
}

export default StatisticList