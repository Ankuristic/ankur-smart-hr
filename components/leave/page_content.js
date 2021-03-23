import React from "react";

function Page_content() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <Table
            className="table-striped"
            pagination={{
              total: data.length,
              showTotal: (total, range) =>
                `Showing ${range[0]} to ${range[1]} of ${total} entries`,
              showSizeChanger: true,
              onShowSizeChange: onShowSizeChange,
              itemRender: itemRender,
            }}
            style={{ overflowX: "auto" }}
            columns={columns}
            // bordered
            dataSource={data}
            rowKey={(record) => record.id}
            onChange={this.handleTableChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Page_content;
