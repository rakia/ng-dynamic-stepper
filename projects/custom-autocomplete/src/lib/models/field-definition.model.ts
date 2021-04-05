export class FieldDefinition { // <T>
    value?:                any; // T
    valueLabel?:           any;
    defaultValue?:         any;
    defaultValueLabel?:    any;
    key:                   string;
    label:                 string;
    dateRangeConfig?:      DateRangeConfig;
    isDefaultSearchField?: boolean;
    required?:             boolean;
    disabled?:             boolean;
    order?:                number;
    icon?:                 string;
    controlType?:          ControlType = 'textbox';
    type?:                 FieldType = 'string';
    editor?:               'numeric' | 'boolean' | ''; // this attribut is for Kendo-Grid
    options?:              any[]; // { label: string, value: string | number }[]
    valueOptions?:         string[];
    valuePrimitive?:       boolean; // for kendo dropdown
    textField?:            string;  // for kendo dropdown
    valueField?:           string;  // for kendo dropdown
    errorMessage?:         string;
    width?:                string;
    valueChangeCallback?:  Function;

    constructor(options: {
        value?:               any; // T
        valueLabel?:          any;
        defaultValue?:        any;
        defaultValueLabel?:   any;
        key?:                 string;
        label?:               string;
        dateRangeConfig?:     DateRangeConfig;
        isDefaultSearchField?:  boolean;
        required?:            boolean;
        disabled?:            boolean;
        order?:               number;
        icon?:                string;
        controlType?:         ControlType;
        type?:                FieldType;
        editor?:              'numeric' | 'boolean'; // this attribut is for Kendo-Grid
        options?:             any[]; // { label: string, value: string | number }[]
        valueOptions?:        string[];
        errorMessage?:        string;
        width?:               string;
        valueChangeCallback?: Function;
      } = {}) {

      this.value                = options.value;
      this.valueLabel           = options.valueLabel;
      this.defaultValue         = options.defaultValue;
      this.defaultValueLabel    = options.defaultValueLabel;
      this.key                  = options.key || '';
      this.label                = options.label || '';
      this.dateRangeConfig      = options.dateRangeConfig;
      this.isDefaultSearchField = options.isDefaultSearchField;
      this.required             = !!options.required;
      this.disabled             = options.disabled;
      this.order                = options.order === undefined ? 1 : options.order;
      this.icon                 = options.icon;
      this.controlType          = options.controlType || 'textbox';
      this.type                 = options.type || 'string';
      this.editor               = options.editor || ''; // this attribut is for Kendo-Grid
      this.options              = options.options || [];
      this.valueOptions         = options.valueOptions || [];
      this.errorMessage         = options.errorMessage || '';
      this.width                = options.width;
      this.valueChangeCallback  = options.valueChangeCallback || undefined;
    }
}

export interface DateRangeConfig {
  startDate: FieldDefinition;
  endDate:   FieldDefinition;
}

export declare type ControlType = 'textbox' | 'ktextbox' | 'combobox' | 'textboxNum' | 'dropdown' | 'dropdownlist' | 'multiselect'
      | 'autocomplete' | 'checkbox' | 'radiobutton' | 'inquiryInDialog' | 'timepicker' | 'datepicker' | 'daterange' | 'textarea'
      | 'slideToggle' | 'slider' | 'switch' | 'buttonToggleGroup'; // checkboxGroup colorpicker button

export declare type FieldType = 'number' | 'string' | 'boolean' | 'date' | 'month' | 'email' | 'password' | 'tel' | 'hidden' | 'image'
      | 'url' | 'week' | 'search' | 'reset' ;
