
export const UIMasks = [
    {
        "id": "ProtoView",
        "title": "ProtoView",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "ProtoView"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "children",
                        "field": "child-1",
                        "type": "child",
                        "staticLabel": true
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "currentView",
                        "field": "prop-currentView",
                        "type": "input",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "viewId",
                        "field": "prop-viewId",
                        "type": "input",
                        "staticLabel": true,
                        "section": "basic"
                    }
                ]
            }
        ]
    },
    {
        "id": "BigTitle",
        "title": "BigTitle",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "BigTitle"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "fontStyle",
                        "field": "prop-fontStyle",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "normal",
                            "italic"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontFamily",
                        "field": "prop-fontFamily",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "$body",
                            "$cherryBomb",
                            "$heading",
                            "$headingDmSans",
                            "$headingDmSerifDisplay",
                            "$mono",
                            "$munro",
                            "$silkscreen"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            }
        ]
    },
    {
        "id": "Container",
        "title": "Container",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Container"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "flexDirection",
                        "field": "prop-flexDirection",
                        "type": "alignment-flex",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "custom-field",
                "data": []
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "Section",
        "title": "Section",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Section"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "flexDirection",
                        "field": "prop-flexDirection",
                        "type": "alignment-flex",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "custom-field",
                "data": []
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "Center",
        "title": "Center",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Center"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "flexDirection",
                        "field": "prop-flexDirection",
                        "type": "alignment-flex",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "custom-field",
                "data": []
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "Image",
        "title": "Image",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Image"
        },
        "body": [
            {
                "type": "api",
                "data": {
                    "label": "url",
                    "field": "prop-url",
                    "apiUrl": "adminapi/v1/files//data/public",
                    "list": "return res.isDir ? undefined : res.name"
                }
            },
            {
                "type": "link",
                "data": {
                    "text": "Need to upload a file?",
                    "url": "/workspace/files?path=%2F%2Fapps%2Fnext%2Fpublic"
                }
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "resizeMode",
                        "field": "prop-resizeMode",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "center",
                            "contain",
                            "cover",
                            "repeat",
                            "stretch"
                        ],
                        "section": "dimensions"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "opacity",
                        "field": "prop-opacity",
                        "staticLabel": true,
                        "type": "range",
                        "data": {
                            "max": 1,
                            "step": 0.1
                        },
                        "section": "decoration"
                    }
                ]
            }
        ]
    },
    {
        "id": "VStack",
        "title": "VStack",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "VStack"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "VCenterStack",
        "title": "VCenterStack",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "VCenterStack"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "HCenterStack",
        "title": "HCenterStack",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "HCenterStack"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "HStack",
        "title": "HStack",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "HStack"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "color"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "border",
                        "field": "prop-border",
                        "staticLabel": true,
                        "type": "input",
                        "section": "decoration"
                    },
                    {
                        "label": "borderRadius",
                        "field": "prop-borderRadius",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    },
                    {
                        "label": "elevation",
                        "field": "prop-elevation",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "decoration"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "Spacer",
        "title": "Spacer",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Spacer"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "size",
                        "field": "prop-size",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    }
                ]
            },
            {
                "type": "child",
                "data": [],
                "disableAdd": true
            }
        ]
    },
    {
        "id": "Page",
        "title": "Page",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Page"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "title",
                        "field": "prop-title",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "bgColor",
                        "field": "prop-backgroundColor",
                        "staticLabel": true,
                        "type": "color",
                        "section": "basic"
                    },
                    {
                        "label": "justifyContent",
                        "field": "prop-justifyContent",
                        "type": "alignment-content",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "alignItems",
                        "field": "prop-alignItems",
                        "type": "alignment-items",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "gap",
                        "field": "prop-gap",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "decoration"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "Head1",
        "title": "Head1",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Head1"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "fontStyle",
                        "field": "prop-fontStyle",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "normal",
                            "italic"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontFamily",
                        "field": "prop-fontFamily",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "$body",
                            "$cherryBomb",
                            "$heading",
                            "$headingDmSans",
                            "$headingDmSerifDisplay",
                            "$mono",
                            "$munro",
                            "$silkscreen"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontWeight",
                        "field": "prop-fontWeight",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900",
                            "bold",
                            "normal"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "textAlign",
                        "field": "prop-textAlign",
                        "staticLabel": true,
                        "type": "alignment-text",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "Head2",
        "title": "Head2",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Head2"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "fontStyle",
                        "field": "prop-fontStyle",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "normal",
                            "italic"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontFamily",
                        "field": "prop-fontFamily",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "$body",
                            "$cherryBomb",
                            "$heading",
                            "$headingDmSans",
                            "$headingDmSerifDisplay",
                            "$mono",
                            "$munro",
                            "$silkscreen"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontWeight",
                        "field": "prop-fontWeight",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900",
                            "bold",
                            "normal"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "textAlign",
                        "field": "prop-textAlign",
                        "staticLabel": true,
                        "type": "alignment-text",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "Head3",
        "title": "Head3",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Head3"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "fontStyle",
                        "field": "prop-fontStyle",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "normal",
                            "italic"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontFamily",
                        "field": "prop-fontFamily",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "$body",
                            "$cherryBomb",
                            "$heading",
                            "$headingDmSans",
                            "$headingDmSerifDisplay",
                            "$mono",
                            "$munro",
                            "$silkscreen"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontWeight",
                        "field": "prop-fontWeight",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900",
                            "bold",
                            "normal"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "textAlign",
                        "field": "prop-textAlign",
                        "staticLabel": true,
                        "type": "alignment-text",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "Icon",
        "title": "Icon",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Icon"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "name",
                        "field": "prop-name",
                        "type": "input",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "color",
                        "field": "prop-color",
                        "staticLabel": true,
                        "type": "color",
                        "section": "basic"
                    },
                    {
                        "label": "size",
                        "field": "prop-size",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    }
                ]
            }
        ]
    },
    {
        "id": "Text",
        "title": "Text",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "Text"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "fontSize",
                        "field": "prop-fontSize",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "fontStyle",
                        "field": "prop-fontStyle",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "normal",
                            "italic"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontFamily",
                        "field": "prop-fontFamily",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "$body",
                            "$cherryBomb",
                            "$heading",
                            "$headingDmSans",
                            "$headingDmSerifDisplay",
                            "$mono",
                            "$munro",
                            "$silkscreen"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "fontWeight",
                        "field": "prop-fontWeight",
                        "staticLabel": true,
                        "type": "select",
                        "data": [
                            "100",
                            "200",
                            "300",
                            "400",
                            "500",
                            "600",
                            "700",
                            "800",
                            "900",
                            "bold",
                            "normal"
                        ],
                        "section": "basic"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "textAlign",
                        "field": "prop-textAlign",
                        "staticLabel": true,
                        "type": "alignment-text",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "RainbowText",
        "title": "RainbowText",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "RainbowText"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "textAlign",
                        "field": "prop-textAlign",
                        "staticLabel": true,
                        "type": "alignment-text",
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "BlockTitle",
        "title": "BlockTitle",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "BlockTitle"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "title",
                        "field": "prop-title",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "subtitle",
                        "field": "prop-subtitle",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "titleColor",
                        "field": "prop-titleColor",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "subtitleColor",
                        "field": "prop-subtitleColor",
                        "type": "color",
                        "staticLabel": true,
                        "section": "basic"
                    },
                    {
                        "label": "space",
                        "field": "prop-space",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "margin",
                        "field": "prop-margin",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding",
                        "staticLabel": true,
                        "type": "range-theme",
                        "section": "layout"
                    },
                    {
                        "label": "alignSelf",
                        "field": "prop-alignSelf",
                        "staticLabel": true,
                        "type": "alignment-items",
                        "section": "layout"
                    },
                    {
                        "label": "flexDirection",
                        "field": "prop-flexDirection",
                        "type": "alignment-flex",
                        "staticLabel": true,
                        "section": "layout"
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "staticLabel": true,
                        "type": "input",
                        "section": "dimensions"
                    }
                ]
            },
            {
                "type": "prop",
                "data": []
            }
        ]
    },
    {
        "id": "DefaultLayout",
        "title": "DefaultLayout",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "DefaultLayout"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "headerTitle",
                        "field": "prop-headerTitle",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "title",
                        "field": "prop-title",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "description",
                        "field": "prop-description",
                        "staticLabel": true,
                        "type": "input",
                        "section": "basic"
                    },
                    {
                        "label": "tintSwitcher",
                        "field": "prop-tintSwitcher",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "conf"
                    },
                    {
                        "label": "themeSwitcher",
                        "field": "prop-themeSwitcher",
                        "staticLabel": true,
                        "type": "toggle-boolean",
                        "section": "conf"
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "MainButton",
        "title": "MainButton",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "MainButton"
        },
        "body": [
            {
                "type": "child",
                "data": [
                    {
                        "label": "caption",
                        "field": "child-1",
                        "type": "child"
                    }
                ],
                "disableAdd": true
            },
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "margin",
                        "field": "prop-margin"
                    },
                    {
                        "label": "padding",
                        "field": "prop-padding"
                    }
                ]
            },
            {
                "type": "prop",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "static": true,
                        "type": "colorPicker"
                    },
                    {
                        "label": "textColor",
                        "field": "prop-textColor",
                        "static": true,
                        "type": "colorPicker"
                    }
                ]
            }
        ]
    },
    {
        "id": "GithubIcon",
        "title": "GithubIcon",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "GithubIcon"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "staticLabel": true,
                        "type": "color"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "type": "range-px",
                        "staticLabel": true
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "type": "range-px",
                        "staticLabel": true
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "DiscordIcon",
        "title": "DiscordIcon",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "DiscordIcon"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "staticLabel": true,
                        "type": "color"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "type": "range-px",
                        "staticLabel": true
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "type": "range-px",
                        "staticLabel": true
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    },
    {
        "id": "TwitterIcon",
        "title": "TwitterIcon",
        "path": "*",
        "type": "JsxElement",
        "filter": {
            "name": "TwitterIcon"
        },
        "body": [
            {
                "type": "custom-field",
                "data": [
                    {
                        "label": "color",
                        "field": "prop-color",
                        "staticLabel": true,
                        "type": "color"
                    },
                    {
                        "label": "height",
                        "field": "prop-height",
                        "type": "range-px",
                        "staticLabel": true
                    },
                    {
                        "label": "width",
                        "field": "prop-width",
                        "type": "range-px",
                        "staticLabel": true
                    }
                ]
            },
            {
                "type": "child",
                "data": []
            }
        ]
    }
]