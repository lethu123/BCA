import React, {Component} from 'react'
import {Label, Input, FormGroup, Button, Spinner} from 'reactstrap'
import {X} from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import classnames from 'classnames'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import '@core/scss/react/libs/editor/editor.scss'
import '@core/scss/react/libs/react-select/_react-select.scss'
import {Editor} from 'react-draft-wysiwyg'
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import {selectThemeColors} from 'utility/Utils'

// import parse from 'html-react-parser'
import Select from 'react-select'
const uploadImageCallBack = file => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://api.imgur.com/3/image')
    xhr.setRequestHeader('Authorization', 'Client-ID 7e1c3e366d22aa3')
    const data = new FormData()
    data.append('image', file)
    xhr.send(data)
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText)
      resolve(response)
    })
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText)
      reject(error)
    })
  })
}

const CustomClearText = () => (
  <>
    <X size={14} className="text-primary cursor-pointer ml-1" />
  </>
)
const ClearIndicator = props => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: {ref, ...restInnerProps},
  } = props
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles('clearIndicator', props)}
    >
      <div style={{padding: '0px 5px'}}>{children}</div>
    </div>
  )
}

class DataListSidebar extends Component {
  state = {
    id: '',
    title: '',
    title_en: '',
    category: 'All',
    topic: '',
    skill: [],
    position: [],
    level: 'Beginer',
    onlineHours: '',
    benefit: [],
    about: EditorState.createEmpty(),
    careerOrientation: EditorState.createEmpty(),
    about_en: EditorState.createEmpty(),
    careerOrientation_en: EditorState.createEmpty(),
    termOfUse: EditorState.createEmpty(),
    img: {preview: '', file: null},
    videoUrlIntroduce: '',
    price: 0,
  }

  addNew = false

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== null && prevProps.data === null) {
      if (this.props.data.id !== prevState.id) {
        this.setState({id: this.props.data.id})
      }
      if (this.props.data.video_url_introduce !== prevState.videoUrlIntroduce) {
        this.setState({videoUrlIntroduce: this.props.data.video_url_introduce})
      }
      if (this.props.data.title !== prevState.title) {
        this.setState({title: this.props.data.title})
      }
      if (this.props.data.title_en !== prevState.title_en) {
        this.setState({title_en: this.props.data.title_en})
      }
      if (this.props.data.category !== prevState.category) {
        this.setState({category: this.props.data.category})
      }

      if (this.props.data.level !== prevState.level) {
        this.setState({level: this.props.data.level})
      }
      if (this.props.data.time !== prevState.onlineHours) {
        this.setState({onlineHours: this.props.data.time})
      }

      if (this.props.data.picture !== prevState.img.preview) {
        this.setState({img: {preview: this.props.data.picture, file: null}})
      }

      if (this.props.data.sub_category_name !== prevState.topic) {
        this.setState({topic: this.props.data.sub_category_name})
      }

      if (this.props.defaultSkills.length > prevState.skill.length) {
        this.setState({skill: this.props.defaultSkills})
      }

      if (this.props.defaultBenefit.length > prevState.benefit.length) {
        this.setState({benefit: this.props.defaultBenefit})
      }

      if (this.props.defaultPosition.length > prevState.position.length) {
        this.setState({position: this.props.defaultPosition})
      }
      if (
        this.props.data.about_vi !==
        draftToHtml(convertToRaw(prevState.about.getCurrentContent()))
      ) {
        this.setState({
          about: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(this.props.data.about_vi ?? ''),
            ),
          ),
        })
      }

      if (
        this.props.data.about_en !==
        draftToHtml(convertToRaw(prevState.about_en.getCurrentContent()))
      ) {
        this.setState({
          about_en: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(this.props.data.about_en ?? ''),
            ),
          ),
        })
      }

      if (
        this.props.data.career_orientation_vi !==
        draftToHtml(
          convertToRaw(prevState.careerOrientation.getCurrentContent()),
        )
      ) {
        this.setState({
          careerOrientation: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(this.props.data.career_orientation_vi ?? ''),
            ),
          ),
        })
      }

      if (
        this.props.data.career_orientation_en !==
        draftToHtml(
          convertToRaw(prevState.careerOrientation_en.getCurrentContent()),
        )
      ) {
        this.setState({
          careerOrientation_en: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(this.props.data.career_orientation_en ?? ''),
            ),
          ),
        })
      }
    }
    if (this.props.data === null && prevProps.data !== null) {
      this.setState({
        id: '',
        title: '',
        title_en: '',
        category: 'All',
        topic: '',
        skill: [],
        position: [],
        level: 'Beginer',
        onlineHours: '',
        benefit: '',
        about: EditorState.createEmpty(),
        about_en: EditorState.createEmpty(),
        careerOrientation: EditorState.createEmpty(),
        careerOrientation_en: EditorState.createEmpty(),
        termOfUse: EditorState.createEmpty(),
        img: {preview: '', file: null},
      })
    }
    if (this.addNew) {
      this.setState({
        id: '',
        title: '',
        title_en: '',
        category: 'All',
        topic: '',
        skill: [],
        position: [],
        level: 'Beginer',
        onlineHours: '',
        benefit: '',
        about: EditorState.createEmpty(),
        careerOrientation: EditorState.createEmpty(),
        about_en: EditorState.createEmpty(),
        careerOrientation_en: EditorState.createEmpty(),
        termOfUse: EditorState.createEmpty(),
        img: {preview: '', file: null},
      })
    }
    this.addNew = false
  }

  handleSubmit = obj => {
    if (this.props.data !== null) {
      this.props.addData(obj, this.props.data)
    } else {
      this.addNew = true
      this.props.addData(obj)
    }
    if (!this.props.loading) {
      this.props.handleSidebar(false, true)
    }
  }

  render() {
    let {
      show,
      handleSidebar,
      data,
      subCategories,
      categories,
      renderSubCategory,
      renderSkills,
      skills,
      positions,
      benefits,
    } = this.props
    let {
      title,
      title_en,
      category,
      topic,
      level,
      onlineHours,
      img,
      skill,
      position,
      benefit,
      about,
      about_en,
      careerOrientation,
      careerOrientation_en,
      termOfUse,
      videoUrlIntroduce,
      price,
    } = this.state

    return (
      <div
        className={classnames('data-list-sidebar', {
          show: show,
        })}
      >
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          <h4>{data !== null ? 'UPDATE COURSE' : 'ADD NEW COURSE'}</h4>
          <X size={20} onClick={() => handleSidebar(false, true)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{wheelPropagation: false}}
        >
          {this.props.thumbView && img.preview ? (
            <FormGroup className="text-center">
              <img className="img-fluid" src={img.preview} alt={title} />
              <div className="d-flex flex-wrap justify-content-between mt-2">
                <label
                  className="btn btn-flat-primary"
                  htmlFor="update-image"
                  color="primary"
                >
                  Upload Image
                  <input
                    type="file"
                    id="update-image"
                    hidden
                    onChange={e =>
                      this.setState({
                        img: {
                          preview: URL.createObjectURL(e.target.files[0]),
                          file: e.target.files[0],
                        },
                      })
                    }
                  />
                </label>
                <Button
                  color="flat-danger"
                  onClick={() =>
                    this.setState({img: {preview: '', file: null}})
                  }
                >
                  Remove Image
                </Button>
              </div>
            </FormGroup>
          ) : null}
          {this.props.thumbView && img.preview <= 0 ? (
            <label
              className="btn btn-primary mb-1"
              htmlFor="upload-image"
              color="primary"
              style={{color: '#ffffff'}}
            >
              Upload Image
              <input
                type="file"
                id="upload-image"
                hidden
                onChange={e =>
                  this.setState({
                    img: {
                      preview: URL.createObjectURL(e.target.files[0]),
                      file: e.target.files[0],
                    },
                  })
                }
              />
            </label>
          ) : null}
          <FormGroup>
            <Label for="data-name" className="text-bold-600">
              Title (Vietnamese)
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="textarea"
              value={title}
              placeholder="Your Title"
              onChange={e => this.setState({title: e.target.value})}
              id="data-name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-name" className="text-bold-600">
              Title (English)
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="textarea"
              value={title_en}
              placeholder="Your Title"
              onChange={e => this.setState({title_en: e.target.value})}
              id="data-name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-category" className="text-bold-600">
              Category
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="select"
              id="data-category"
              value={category}
              onChange={e => {
                this.setState({category: e.target.value})
                renderSubCategory(e.target.value)
              }}
              onBlur={() =>
                this.setState({
                  topic:
                    subCategories.length > 0 ? subCategories[0].sub_name : '',
                })
              }
            >
              {categories.length > 0 &&
                categories.map(({name}, idx) => (
                  <option key={idx}>{name}</option>
                ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="data-subCategory" className="text-bold-600">
              Topics
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="select"
              id="data-subCategory"
              value={topic}
              onChange={e => {
                this.setState({topic: e.target.value})
                renderSkills(e.target.value)
              }}
              onBlur={() =>
                this.setState({skill: skills.length > 0 ? skills[0].name : ''})
              }
            >
              {subCategories.length > 0 &&
                subCategories.map((ele, idx) => (
                  <option
                    key={idx}
                    id={ele.id}
                    // onClick={() => renderSubCategory(name)}
                  >
                    {ele.sub_name}
                  </option>
                ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="data-skills" className="text-bold-600">
              Skills
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>

            <Select
              closeMenuOnSelect={false}
              theme={selectThemeColors}
              components={{ClearIndicator}}
              value={skill}
              isMulti
              options={
                skills.length > 0
                  ? skills.map(option => ({
                      id: option.id,
                      id_delete: option.id_delete,
                      value: option.name,
                      label: option.name,
                    }))
                  : []
              }
              className="React"
              classNamePrefix="select"
              isSearchable={true}
              onChange={e => this.setState({skill: e})}
            />
          </FormGroup>

          <FormGroup>
            <Label for="data-instructor" className="text-bold-600">
              Who Is This Course For?
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Select
              theme={selectThemeColors}
              closeMenuOnSelect={true}
              components={{ClearIndicator}}
              value={position}
              isMulti
              options={
                positions.length > 0 &&
                positions.map(ele => ({
                  id: ele.id,
                  value: ele.name,
                  label: ele.name,
                }))
              }
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  this.setState({
                    position: [
                      ...position,
                      {
                        id: null,
                        value: e.target.value,
                        label: e.target.value,
                      },
                    ],
                  })
                }
              }}
              className="React"
              classNamePrefix="select"
              placeholder="Add a tag (press enter)"
              isSearchable={true}
              onChange={e => this.setState({position: e})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-level" className="text-bold-600">
              Level
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="select"
              id="data-level"
              value={level}
              onChange={e => this.setState({level: e.target.value})}
            >
              <option>Beginer</option>
              <option>Intermediate</option>
              <option>Advance</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="data-onlineHours" className="text-bold-600">
              Online hours
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="number"
              value={onlineHours}
              onChange={e => this.setState({onlineHours: e.target.value})}
              id="data-onlineHours"
              placeholder="3h"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-video-intro" className="text-bold-600">
              Video url introduce
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="text"
              value={videoUrlIntroduce}
              onChange={e => this.setState({videoUrlIntroduce: e.target.value})}
              id="data-video-intro"
              placeholder="https://youtube.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-benefits" className="text-bold-600">
              Benefits
            </Label>
            <Select
              theme={selectThemeColors}
              closeMenuOnSelect={false}
              components={{ClearIndicator}}
              value={benefit}
              isMulti
              options={
                benefits.length > 0
                  ? benefits.map(option => ({
                      id: option.id,
                      value: option.content,
                      label: option.content,
                    }))
                  : []
              }
              className="React"
              classNamePrefix="select"
              isSearchable={true}
              onChange={e => this.setState({benefit: e})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-price" className="text-bold-600">
              Price($)
              <sup style={{color: '#FF0000'}}>*</sup>
            </Label>
            <Input
              type="number"
              value={price}
              onChange={e => this.setState({price: e.target.value})}
              id="data-price"
              placeholder="10$"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-about" className="text-bold-600">
              About (Vietnamese)
            </Label>
            <Editor
              editorState={about}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e => this.setState({about: e})}
              toolbar={{
                inline: {inDropdown: true},
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
                image: {
                  uploadCallback: uploadImageCallBack,
                  previewImage: true,
                  alt: {present: true, mandatory: true},
                },
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-about" className="text-bold-600">
              About (English)
            </Label>
            <Editor
              editorState={about_en}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e => this.setState({about_en: e})}
              toolbar={{
                inline: {inDropdown: true},
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
                image: {
                  uploadCallback: uploadImageCallBack,
                  previewImage: true,
                  alt: {present: true, mandatory: true},
                },
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-bold-600">
              Career orientation (Vietnamese)
            </Label>
            <Editor
              editorState={careerOrientation}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e => this.setState({careerOrientation: e})}
              toolbar={{
                inline: {inDropdown: true},
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
                image: {
                  uploadCallback: uploadImageCallBack,
                  previewImage: true,
                  alt: {present: true, mandatory: true},
                },
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-bold-600">
              Career orientation (English)
            </Label>
            <Editor
              editorState={careerOrientation_en}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={e =>
                this.setState({careerOrientation_en: e})
              }
              toolbar={{
                inline: {inDropdown: true},
                list: {inDropdown: true},
                textAlign: {inDropdown: true},
                link: {inDropdown: true},
                history: {inDropdown: true},
                image: {
                  uploadCallback: uploadImageCallBack,
                  previewImage: true,
                  alt: {present: true, mandatory: true},
                },
              }}
            />
          </FormGroup>
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button
            color="primary"
            onClick={() =>
              this.handleSubmit({
                ...this.state,
                about: draftToHtml(convertToRaw(about.getCurrentContent())),
                careerOrientation: draftToHtml(
                  convertToRaw(careerOrientation.getCurrentContent()),
                ),
                about_en: draftToHtml(convertToRaw(about.getCurrentContent())),
                careerOrientation_en: draftToHtml(
                  convertToRaw(careerOrientation.getCurrentContent()),
                ),
                termOfUse: draftToHtml(
                  convertToRaw(termOfUse.getCurrentContent()),
                ),
                subCategoryId: subCategories.filter(
                  ele => ele.sub_name === topic,
                ),
              })
            }
            disabled={
              !(
                title !== '' &&
                title_en !== '' &&
                category !== '' &&
                topic !== '' &&
                level !== '' &&
                onlineHours !== '' &&
                img.preview !== '' &&
                skill.length !== 0 &&
                benefit.length !== 0 &&
                videoUrlIntroduce !== '' &&
                price > 0 &&
                position.length !== 0
              )
            }
          >
            {this.props.loading ? (
              <>
                <Spinner color="white" size="sm" type="grow" />
                <span className="ml-50">Loading</span>
              </>
            ) : data !== null ? (
              'Update'
            ) : (
              'Create'
            )}
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false, true)}
          >
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}
export default DataListSidebar
