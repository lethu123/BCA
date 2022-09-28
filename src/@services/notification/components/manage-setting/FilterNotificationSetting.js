import {useState} from 'react'
// *** Components
import DatePickerField from 'components/form/DatePickerField'
import RadioField from 'components/form/RadioField'
import {UserQuery} from '@services/user'
import SelectField from 'components/form/SelectField'
import moment from 'moment'

const initial = {
  target_role: null,
  create_by: null,
  update_by: null,
  create_at: null,
  update_at: null,
}
const FilterNotificationSetting = ({setFilterObject}) => {
  const [obj, setObj] = useState(initial)

  const {data: users} = UserQuery.useGetListAllUserSys()
  return (
    <div className="p-1">
      <div>
        <DatePickerField
          name="create_at"
          label="Ngày tạo"
          onChange={(name, value) => {
            setObj({...obj, create_at: value[0]})
          }}
        />
        <DatePickerField
          name="update_at"
          label="Ngày cập nhật"
          options={{
            disable: [
              function (date) {
                return obj.create_at
                  ? date.getTime() < new Date(obj.create_at).getTime()
                  : false
              },
            ],
            dateFormat: 'd-m-Y',
          }}
          onChange={(name, value) => setObj({...obj, update_at: value[0]})}
        />
        <SelectField
          name="create_by"
          label="Người tạo"
          isSearchable
          onChange={(name, value) => setObj({...obj, create_by: value.value})}
          options={users?.data.map(it => ({
            ...it,
            value: it.user_id,
            label: it.profile?.name || it.username,
          }))}
        />
        <SelectField
          name="update_by"
          label="Người cập nhật"
          isSearchable
          onChange={(name, value) => setObj({...obj, update_by: value.value})}
          options={users?.data.map(it => ({
            ...it,
            value: it.user_id,
            label: it.profile?.name || it.username,
          }))}
        />
        <div className="mt-1">
          <RadioField
            name="target_role"
            inline
            options={[
              {
                value: 'ALL',
                label: 'Tất cả',
                checked: true,
              },
              {
                value: 'ADMIN',
                label: 'Admin',
              },
              {
                value: 'PARTNER',
                label: 'Đối tác',
              },
            ]}
            onChange={(name, value) => {
              setObj({...obj, target_role: value.value})
            }}
          />
        </div>
      </div>
      {/*begin::Actions*/}
      <div className="d-flex justify-content-end">
        <button
          type="reset"
          className="btn btn-white btn-active-light-primary me-2"
          onClick={() => {
            setObj(initial)
            setFilterObject({})
          }}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setFilterObject({
              ...obj,
              create_at: obj.create_at
                ? moment(obj.create_at).format('YYYY-MM-DD')
                : null,
              update_at: obj.update_at
                ? moment(obj.update_at).format('YYYY-MM-DD')
                : null,
            })
          }}
        >
          Apply
        </button>
      </div>
      {/*end::Actions*/}
    </div>
  )
}

export default FilterNotificationSetting
